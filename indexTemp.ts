import * as publicEmbed from "./publicEmbed.ts";
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
const PRODUCTION = Deno.args.includes("production");

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
};

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
    console.info(
        chalk.cyan(
            "server init started with " +
                (nt.nt.isRobotConnected() ? "nt connected" : "nt not connected")
        )
    );

    if (!PRODUCTION) {
        await buildAll(); //build client js
    }

    const app = express();
    const server = http.createServer(app);

    let pagesCache = {};

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

    
    app.use(
            "",
            (
                req,
                res,
                next
            ) => {
                let data = publicEmbed[req.originalUrl.slice(1).replaceAll(".", "DOT").replaceAll("/", "SLASH").replaceAll("-", "DASH")];
    
                if (typeof data === "string") {
    
                    data = decodeURIComponent(data);
    
                    let contentType = "text";
    
                    const extension = req.originalUrl.match(/.[0-9a-z]{1,5}$/i)[0];
                    console.log(extension);
    
                    if (extension == ".html") {
                        contentType = "text/html";
                    } else if (extension == ".css") { 
                        contentType = "text/css";
                    } else if (extension == ".js") {
                        contentType = "text/javascript";
                    }
                    
                    res.set("Content-Type", contentType);
                }
    
                res.send(data);
            }
        );
 //actually serve the files from the public dir (DONT CHANGE THIS LINE!!!)

    //socket setup
    const io = new Server(server);

    io.on("connection", (socket) => {
        if (PRODUCTION) {
            console.info(chalk.green("Frontend Connected!"));
        }
        //put all nt forwards right here

        if (NTOVERRIDE) {
            //for testing socket connection
            setInterval(() => {
                socket.volatile.emit(
                    "Control_Loop_Time",
                    Math.random() * 2 + 20
                );
            }, 50);
            setInterval(() => {
                socket.emit("Master_States", [
                    true,
                    false,
                    false,
                    false,
                ]);
            }, 100);
            setInterval(() => {
                socket.emit("Legal_Actuator_Names", [
                    "No_Test",
                    "Compressor_(p)",
                    "Drive_0_(p)",
                    "Drive_1_(p)",
                    "Drive_2_(p)",
                    "Drive_3_(p)",
                    "Azimuth_0_(p)",
                    "Azimuth_1_(p)",
                    "Azimuth_2_(p)",
                    "Azimuth_3_(p)",
                    "Swerve_Shifter_(b)",
                    "Drivetrain_(p)",
                    "Wrist_(p)",
                    "Pivot_(p)",
                    "Extender_(p)",
                    "Intake_(p)",
                ]);
            }, 1000);
            setInterval(() => {
                socket.emit("Legal_Drivers", [
                    "Devin",
                    "Kidz",
                ]);
            }, 1000);
            for (let i = 0; i <= 3; i++) {
                eval(`setInterval(() => {
                    socket.emit("Swerve_${i}_Details", [
                        Math.round(Math.random() * 360),
                        Math.random()*30+40,
                        (Math.random() < 0.2) ? Math.round(Math.random()*32-16):0,
                        Math.random() < 0.9 ? "HIGH":"LOW"]);
                }, 1001+(${i}*50));`);
            }
        } else {
            //actual production usage
            const ntTypes = {
                double: NetworkTablesTypeInfos.kDouble,
                "double[]": NetworkTablesTypeInfos.kDoubleArray,
                boolean: NetworkTablesTypeInfos.kBoolean,
                "boolean[]": NetworkTablesTypeInfos.kBooleanArray,
                string: NetworkTablesTypeInfos.kString,
                "string[]": NetworkTablesTypeInfos.kStringArray,
            };
            const topics = {
                Control_Loop_Time: ["double", "volatile"],
                Unlock_Pivot: ["boolean", "", "subs"],
                Unlock_Wrist: ["boolean", "", "subs"],
                Unlock_Extender: ["boolean", "", "subs"],
                Calibrate_Extender: ["boolean", "", "subs"],
                "Wrist_Position_(deg)": "double",
                "Extender_Position_(in)": "double",
                "Pivot_Position_(deg)": "double",
                "Intake_Velocity_(rpm)": "double",
                "Intake_Temp_(C)": "double",
                "Pivot_Temp_(C)": "double",
                "Extender_Temp_(C)": "double",
                "Wrist_Temp_(C)": "double",

                Unlock_Azimuth: ["boolean", "", "subs"],
                Calibrate_Wheels: ["boolean", "", "subs"],
                Home_Wheels: ["boolean", "", "subs"],
                Swerve_0_Details: "double[]",
                Swerve_1_Details: "double[]",
                Swerve_2_Details: "double[]",
                Swerve_3_Details: "double[]",
                Confirmed_States: "boolean[]",

                Test_Actuator_Name: ["string", "", "subs"],
                Legal_Actuator_Names: "string[]",
                Test_Actuator_Value: ["double", "", "subs"],
                Test_Actuator_Period: ["double", "", "subs"],

                Selected_Driver: ["string", "", "subs"],
                Legal_Drivers: "string[]",
                New_Driver_Profile_Setpoints: ["double[]", "", "subs"],
                Current_Driver_Profile_Setpoints: "double[]",
            };
            Object.keys(topics).forEach((topic) => {
                //ignore these errors. it's all fine. dont worry abt it
                if (typeof topics[topic] == "string") {
                    nt.topicForwardAny(topic, ntTypes[topics[topic]], socket);
                } else {
                    const likeAndSubscwibeUWU = !(ntTypes[topics[topic][2]] == "subs");
                    console.log(likeAndSubscwibeUWU)

                    if (topics[topic][1] == "volatile") {
                        nt.topicForwardAny(
                            topic,
                            ntTypes[topics[topic][0]],
                            socket,
                            true,
                            likeAndSubscwibeUWU
                        );
                    } else {
                        nt.topicForwardAny(
                            topic,
                            ntTypes[topics[topic][0]],
                            socket,
                            false,
                            likeAndSubscwibeUWU
                        );
                    }
                }
            });
        }
    });

    server.listen(HOSTPORT, () => {
        console.info(
            chalk.green("server init complete, listening on port " + HOSTPORT)
        );

        const launchApp: Deno.Command = new Deno.Command(
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            {
                args: [
                    "--app=http://localhost:4265",
                    `--window-size=2000,830`,
                    "--window-position=0,0",
                ],
            }
        );

        if (PRODUCTION) {
            setTimeout(() => {
                console.info(chalk.cyan("Launching frontend"));
                launchApp.spawn();
            }, 1000);
        }
    });
}
