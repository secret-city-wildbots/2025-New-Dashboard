import { h, Fragment } from 'npm:preact';
import NTReadout from "./NTReadout.tsx";
import { Socket } from "socket.io-client";

interface ReadoutProps {
  socket: Socket;
  dashboardItem?: boolean;
  shifting?: boolean;
}

const SwerveModules = ({
    socket,
    dashboardItem = false,
    shifting = false,
}: ReadoutProps) => {

  return (
    <div class={"swerve-modules " + (dashboardItem ? "column-item":"")} style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        wrap: "no-wrap",
    }}>
        <table>
            <tr>
                <th>

                </th>
                <th>
                    Module 1
                </th>
                <th>
                    Module 0
                </th>
            </tr>
            <tr>
                <td>
                    Angle (deg)
                </td>
                <td>
                    <NTReadout nt={`Swerve_1_Details`} round={1} index={0} chars={4} socket={socket} angle />
                </td>
                <td>
                    <NTReadout nt={`Swerve_0_Details`} round={1} index={0} chars={4} socket={socket} angle />
                </td>
            </tr>
            <tr>
                <td>
                    Temp (C) 
                </td>
                <td>
                    <NTReadout nt={`Swerve_1_Details`} index={1} round={1} chars={2} socket={socket} temperature />
                </td>
                <td>
                    <NTReadout nt={`Swerve_0_Details`} index={1} round={1} chars={2} socket={socket} temperature />
                </td>
            </tr>
            <tr>
                <td>
                    Vel (ft/s)
                </td>
                <td>
                    <NTReadout nt={`Swerve_1_Details`} round={0.1} index={2} chars={3} socket={socket} />
                </td>
                <td>
                    <NTReadout nt={`Swerve_0_Details`} round={0.1} index={2} chars={3} socket={socket} />
                </td>
            </tr>
            <tr>
                <td>
                    Shifter
                </td>
                <td>
                    <NTReadout nt={`Swerve_1_Details`} index={3} chars={4} socket={socket} />
                </td>
                <td>
                    <NTReadout nt={`Swerve_0_Details`} index={3} chars={4} socket={socket} />
                </td>
            </tr>
        </table>
        <table class="mt-3">
            <tr>
                <th>

                </th>
                <th>
                    Module 2
                </th>
                <th>
                    Module 3
                </th>
            </tr>
            <tr>
                <td>
                    Angle (deg)
                </td>
                <td>
                    <NTReadout nt={`Swerve_2_Details`} round={1} index={0} chars={4} socket={socket} angle />
                </td>
                <td>
                    <NTReadout nt={`Swerve_3_Details`} round={1} index={0} chars={4} socket={socket} angle />
                </td>
            </tr>
            <tr>
                <td>
                    Temp (C) 
                </td>
                <td>
                    <NTReadout nt={`Swerve_2_Details`} index={1} round={1} chars={2} socket={socket} temperature />
                </td>
                <td>
                    <NTReadout nt={`Swerve_3_Details`} index={1} round={1} chars={2} socket={socket} temperature />
                </td>
            </tr>
            <tr>
                <td>
                    Vel (ft/s)
                </td>
                <td>
                    <NTReadout nt={`Swerve_2_Details`} round={0.1} index={2} chars={3} socket={socket} />
                </td>
                <td>
                    <NTReadout nt={`Swerve_3_Details`} round={0.1} index={2} chars={3} socket={socket} />
                </td>
            </tr>
            <tr>
                <td>
                    Shifter
                </td>
                <td>
                    <NTReadout nt={`Swerve_2_Details`} index={3} chars={4} socket={socket} />
                </td>
                <td>
                    <NTReadout nt={`Swerve_3_Details`} index={3} chars={4} socket={socket} />
                </td>
            </tr>
        </table>
    </div>
  );
};

export default SwerveModules;