import { h } from "npm:preact";
import NTBooleanReadout from "../components/NTBooleanReadout.tsx";
import { Socket } from "socket.io-client";

interface MasterStatesProps {
    masterStates: string[];
    socket: Socket;
    dashboardItem?: boolean;
}

const MasterStates = ({
    masterStates,
    socket,
    dashboardItem = false,
}:MasterStatesProps) => {
    socket.on("Confirmed_States", (val) => {
        console.log(val);
    })
    return (
        <div class={"bubble "+(dashboardItem ? "column-item":"")}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}>
                {masterStates.map((state, index) => (
                    <div style="padding:1rem;">
                        <NTBooleanReadout nt="Confirmed_States" socket={socket} chars={4} index={index} text={state} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MasterStates;