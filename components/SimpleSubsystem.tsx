import { h, Fragment } from "npm:preact";
import ArmableButton from "./ArmableButton.tsx";
import NTReadout from "./NTReadout.tsx";
import { Socket } from "npm:socket.io-client";
import Switch from "./Switch.tsx";

interface ReadoutProps {
    absolute?: boolean;
    unit?: string;
    gearRatio?: number;
    dashboardItem?: boolean;
    velocity?: boolean;
    precision?: number;
    socket: Socket;
    name: string;
}

const SimpleSubsystem = ({
    absolute = false,
    unit,
    gearRatio = 1,
    dashboardItem = false,
    velocity = false,
    precision = 0,
    socket,
    name,
}: ReadoutProps) => {
    if (!unit) {
        unit = velocity ? "rpm" : "deg";
    }

    const onToggle = (on: boolean) => {
        socket.emit("Unlock_" + name, on);
        console.log("Setting "+name+" to "+on);
    };

    const onClick = () => {
        socket.emit("Calibrate_" + name, true);
    };

    const onRelease = () => {
        socket.emit("Calibrate_" + name, false);
    };

    console.log(name +
                                (velocity
                                    ? "_Velocity_(" + unit + ")"
                                    : "_Position_(" + unit + ")"));

    return (
        <div
            class={"bubble " + (dashboardItem ? "column-item" : "")}
            style={{ //vertically align in column
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                padding: "1rem",
            }}
        >
            <label>{name}</label>
            {!velocity && !absolute ? (
                <>
                    <ArmableButton
                        text="CALIB"
                        onToggle={onToggle}
                        onClick={onClick}
                        onRelease={onRelease}
                    />
                    <br />
                </>
            ) : (
                <></>
            )}
            {absolute ? (
                <div style={{ //vertically align them in a row. should prob split this into a class.
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <div>
                    <div style="min-height: 2.5rem; margin-top: 1rem;">
                        <label class="label-small pr-3">
                            {velocity ? "Vel" : "Pos"} ({unit})
                        </label>
                        <NTReadout
                            nt={
                                name +
                                (velocity
                                    ? "_Velocity_(" + unit + ")"
                                    : "_Position_(" + unit + ")")
                            }
                            precision={precision}
                            chars={4}
                            socket={socket}
                        />
                    </div>
                    <div style="min-height: 2.5rem">
                        <label class="label-small pr-3">Temp (C)</label>
                        <NTReadout nt={name + "_Temp_(C)"} socket={socket} temperature />
                    </div>
                  </div>
                  <div style="margin-left: 0.25rem;">
                    <Switch onColor="#ef0001" offColor="rgba(116, 255, 6, 1)" onToggle={onToggle} vertical />
                  </div>
                </div>
            ) : (
                <>
                    <div style="min-height: 2.5rem; margin-top: 1rem;">
                        <label class="label-small pr-3">
                            {velocity ? "Vel" : "Pos"} ({unit})
                        </label>
                        <NTReadout
                            nt={
                                name +
                                (velocity
                                    ? "_Velocity_(" + unit + ")"
                                    : "_Position_(" + unit + ")")
                            }
                            precision={precision}
                            chars={4}
                            socket={socket}
                        />
                    </div>
                    <div style="min-height: 2.5rem">
                        <label class="label-small pr-3">Temp (C)</label>
                        <NTReadout nt={name + "_Temp_(C)"} socket={socket} temperature />
                    </div>
                </>
            )}
        </div>
    );
};

export default SimpleSubsystem;
