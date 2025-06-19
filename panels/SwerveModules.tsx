import { h, Fragment } from 'npm:preact';
import NTReadout from "../components/NTReadout.tsx";
import { Socket } from "socket.io-client";
import ArmableButton from "../components/ArmableButton.tsx";
import Button from "../components/Button.tsx";

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

    const onToggleUnlock = (on: boolean) => {
        socket.emit("Unlock_Azimuth", on);
        console.log("Setting "+name+" to "+on);
    };

    const onClickCalib = () => {
        socket.emit("Calibrate_Wheels", true);
    };

    const onReleaseCalib = () => {
        socket.emit("Calibrate_Wheels", false);
    };

    const onClickHome = () => {
        socket.emit("Home_Wheels", true);
    };

    const onReleaseHome = () => {
        socket.emit("Home_Wheels", false);
    };

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
                    <NTReadout nt={`Swerve_1_Details`} precision={0} index={0} chars={4} socket={socket} angle />
                </td>
                <td>
                    <NTReadout nt={`Swerve_0_Details`} precision={0} index={0} chars={4} socket={socket} angle />
                </td>
            </tr>
            <tr>
                <td>
                    Temp (C) 
                </td>
                <td>
                    <NTReadout nt={`Swerve_1_Details`} index={1} precision={0} chars={4} socket={socket} temperature />
                </td>
                <td>
                    <NTReadout nt={`Swerve_0_Details`} index={1} precision={0} chars={4} socket={socket} temperature />
                </td>
            </tr>
            <tr>
                <td>
                    Vel (ft/s)
                </td>
                <td>
                    <NTReadout nt={`Swerve_1_Details`} precision={1} index={2} chars={4} socket={socket} />
                </td>
                <td>
                    <NTReadout nt={`Swerve_0_Details`} precision={1} index={2} chars={4} socket={socket} />
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
                    <NTReadout nt={`Swerve_2_Details`} precision={0} index={0} chars={4} socket={socket} angle />
                </td>
                <td>
                    <NTReadout nt={`Swerve_3_Details`} precision={0} index={0} chars={4} socket={socket} angle />
                </td>
            </tr>
            <tr>
                <td>
                    Temp (C) 
                </td>
                <td>
                    <NTReadout nt={`Swerve_2_Details`} index={1} precision={0} chars={4} socket={socket} temperature />
                </td>
                <td>
                    <NTReadout nt={`Swerve_3_Details`} index={1} precision={0} chars={4} socket={socket} temperature />
                </td>
            </tr>
            <tr>
                <td>
                    Vel (ft/s)
                </td>
                <td>
                    <NTReadout nt={`Swerve_2_Details`} precision={1} index={2} chars={4} socket={socket} />
                </td>
                <td>
                    <NTReadout nt={`Swerve_3_Details`} precision={1} index={2} chars={4} socket={socket} />
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
        <div style="display: flex; justify-center: center; align-items: center; padding-top: 1rem;">
            <div style="padding-right: 0.4rem;">
                <Button text="HOME" onClick={onClickHome} onRelease={onReleaseHome}/>
            </div>
            <ArmableButton text="CALIB" onClick={onClickCalib} onRelease={onReleaseCalib} />
        </div>
    </div>
  );
};

export default SwerveModules;