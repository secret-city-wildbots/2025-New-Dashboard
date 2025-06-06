import { NetworkTable } from "./nt.ts";
import express from "npm:express";
import { Server } from "npm:socket.io";
import http from "node:http";
import chalk from "npm:chalk";
//import jsxMiddleware from "./jsxMiddleware.ts";
import { buildAll } from "./build.ts";
import { NetworkTablesTypeInfos } from "npm:ntcore-ts-client";

const URI = `10.42.65.2`;
const PORT = 5810;
const HOSTPORT = 4265;
const NTOVERRIDE =
    Deno.args.includes("no-nt") ||
    Deno.args.includes("nt-override") ||
    Deno.args.includes("ignore-nt");
const PRODUCTION = 
    Deno.args.includes("production");

/*
 This is a somewhat janky way to remove the annoying websocket errors in the case 
 of it not being able to connect
*/

const originalConsoleError = console.error;

console.error = function (...args: any[]) {
    const message = args.join(" ");
    if (message.includes("WebSocket")) {
        // Suppress logs about websocket errors
        return;
    }
    originalConsoleError(chalk.red(message));
};

const originalConsoleWarn = console.warn;

console.warn = function (...args: any[]) {
    const message = args.join(" ");
    if (message.includes("connect")) {
        if (NTOVERRIDE) {
            return;
        } else {
            originalConsoleWarn(chalk.yellow(message));
            return;
        }
    }
    originalConsoleWarn(message);
}

const nt = new NetworkTable(URI, PORT); //network tables

if (NTOVERRIDE) {
    init();
} else {
    let hasConnected: boolean = false;
    nt.nt.addRobotConnectionListener((on: boolean) => {
        if (on && !hasConnected) {
            hasConnected = true;
            init();
        }
    });
}

async function init() {
    console.info(chalk.cyan(
        "server init started with " +
            (nt.nt.isRobotConnected() ? "nt connected" : "nt not connected")
    ));

    if (!PRODUCTION) {
        await buildAll(); //build client js
    }

    const app = express();
    const server = http.createServer(app);

    app.get(
        /.*\/$/,
        (
            req: { originalUrl: string },
            res: { redirect: (arg0: string) => void },
            next: () => void
        ) => {
            //redirect directories to index.html
            if (req.originalUrl.endsWith("/")) {
                res.redirect(req.originalUrl + "index.html");
            } else {
                next();
            }
        }
    );
    app.use(express.static("public")); //actually serve the files from the public dir

    //socket setup
    const io = new Server(server);

    io.on("connection", (socket) => {
        //put all nt forwards right here

        if (NTOVERRIDE) {
            //for testing socket connection
            setInterval(() => {
                socket.volatile.emit("Control_Loop_Time", Math.random() * 2 + 20);
            }, 51);
            for (let i = 0; i <= 3; i++) {
                eval(`setInterval(() => {
                    socket.volatile.emit("Swerve_${i}_Details", [
                        Math.round(Math.random() * 360),
                        Math.random()*30+40,
                        (Math.random() < 0.2) ? Math.round(Math.random()*32-16):0,
                        Math.random() < 0.7 ? "HIGH":"LOW"]);
                }, 1001+(${i}*50));`)
            }
        } else {
            //actual production usage
            const ntTypes = {
                "double": NetworkTablesTypeInfos.kDouble,
                "double[]": NetworkTablesTypeInfos.kDoubleArray,
                "boolean": NetworkTablesTypeInfos.kBoolean,
                "boolean[]": NetworkTablesTypeInfos.kBooleanArray,
                "string": NetworkTablesTypeInfos.kString,
                "string[]": NetworkTablesTypeInfos.kStringArray
            };
            let topics = {
                "Control_Loop_Time": "double",
                "Unlock_Pivot": "boolean",
                "Unlock_Wrist": "boolean",
                "Unlock_Extender": "boolean",
                "Wrist_Position_(deg)": "double",
                "Extender_Position_(in)": "double",
                "Pivot_Position_(deg)": "double",
                "Intake_Velocity_(rpm)": "double",
                "Intake_Temp_(C)": "double",
                "Pivot_Temp_(C)": "double",
                "Extender_Temp_(C)": "double",
                "Wrist_Temp_(C)": "double",
                "Swerve_0_Details": "double[]",
                "Swerve_1_Details": "double[]",
                "Swerve_2_Details": "double[]",
                "Swerve_3_Details": "double[]",
                "Confirmed_States": "boolean[]"
            };
            Object.keys(topics).forEach((topic) => {
                nt.topicForwardAny(topic, ntTypes[topics[topic]], socket);
            });
        }
    });

    server.listen(HOSTPORT, () => {
        console.info(chalk.green("server init complete, listening on port " + HOSTPORT));

        const launchApp:Deno.Command = new Deno.Command("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", {
            args: [
                "--app=http://localhost:4265",
                `--window-size=2000,830`,
                "--window-position=0,0"
            ]
        });

        if (PRODUCTION) {
            setTimeout(() => {
                launchApp.spawn();
            },100);
        }
    });
}
