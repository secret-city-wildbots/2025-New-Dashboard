import { h, Fragment } from "npm:preact";
import { useState } from "npm:preact/hooks";

import { Socket } from "socket.io-client";
import Dropdown from "../components/Dropdown.tsx";
import NTInput from "../components/NTInput.tsx";
import Input from "../components/Input.tsx";

interface DriverProfilesProps {
    socket: Socket;
    dashboardItem?: boolean;
}

const DriverProfiles = ({
    socket,
    dashboardItem = false,
}: DriverProfilesProps) => {
    const [driver, setDriver] = useState("Devin");
    const [driverNames, setDriverNames] = useState(["Devin"]);

    socket.on("Legal_Drivers", (val) => {
        setDriverNames(val);
        socket.emit("Selected_Driver", driver);
    });

    const setDriverVal = (newVal: string) => {
        setDriver(newVal);
        socket.emit("Selected_Driver", driver);
    };

    return (
        <div
            class={"driver-profiles" + (dashboardItem ? " column-item" : "")}
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                wrap: "no-wrap",
            }}
        >
            <Dropdown items={driverNames} valSetter={setDriverVal} />
            <Input />
        </div>
    );
};

export default DriverProfiles;