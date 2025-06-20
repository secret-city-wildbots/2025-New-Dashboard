import { h } from "npm:preact";
import { Socket } from "socket.io-client";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import FlexCol from "../components/FlexCol.tsx";
import Readout from "../components/Readout.tsx";
import NTReadout from "../components/NTReadout.tsx";

interface RobotPosReadoutProps {
  socket: Socket;
}

const RobotPosReadout = ({ socket }: RobotPosReadoutProps) => {
  return (
      <FlexCol>
        <div style="padding-bottom: 1rem">
          <Button text="PUSH ROBOT POS" />
        </div>

        <table>
          <tr>
            <td>
              <label>Current X (in)</label>
            </td>
            <td>
              <NTReadout nt="Robot_X" socket={socket} precision={1} chars={4} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Y (in)</label>
            </td>
            <td>
              <Input defaultVal={0.0} number precision={1} />
            </td>
          </tr>
          <tr>
            <td>
              <label>H (deg)</label>
            </td>
            <td>
              <Input defaultVal={0.0} number precision={1} noSendBtn />
            </td>
          </tr>
        </table>
      </FlexCol>
  );
};

export default RobotPosReadout;
