import { h } from "npm:preact";
import { io } from "npm:socket.io-client";
import TabbedContainer from "../components/TabbedContainer.tsx";
import Container from "../components/Container.tsx";
import DashboardItem from "../components/DashboardItem.tsx";
import NTReadout from "../components/NTReadout.tsx";
import SimpleSubsystem from "../panels/SimpleSubsystem.tsx";
import SwerveModules from "../panels/SwerveModules.tsx";
import MasterStates from "../panels/MasterStates.tsx";
import DashboardSubRow from "../components/DashboardSubRow.tsx";
import FieldMap from "../panels/FieldMap.tsx";
import ActuatorTesting from "../panels/ActuatorTesting.tsx";
import DriverProfiles from "../panels/DriverProfiles.tsx";
import FlexRow from "../components/FlexRow.tsx";
import RobotPosEditor from "../panels/RobotPosEditor.tsx";
import RobotPosReadout from "../panels/RobotPosReadout.tsx";

export default function () {
  const socket = io();

  const tabs = [
    {
      title: "Checklist",
      content: (
        <Container>Checklist thingy idk. Pretty low-priority ngl</Container>
      ),
    },
    {
      title: "Setup/Auto",
      content: (
        <Container>
          <div class="row bubble">
            <div class="col-6 column">
              <DashboardItem>
                <RobotPosReadout socket={socket} />
              </DashboardItem>
            </div>
            <div class="col-6 column">
              <DashboardItem>
                <RobotPosEditor socket={socket} />
              </DashboardItem>
            </div>
          </div>
        </Container>
      ),
    },
    {
      title: "TeleOp",
      content: (
        <Container>
          <FieldMap socket={socket} />
        </Container>
      ),
    },
    {
      title: "Tune",
      content: (
        <Container>
          <div class="row bubble">
            <div class="col-4 column">
              <DashboardItem>
                <div>
                  <h3>Drivetrain</h3>
                  <SwerveModules socket={socket} shifting dashboardItem />
                </div>
              </DashboardItem>
            </div>
            <div class="col-3 column">
              <DashboardItem>
                <div>
                  <h3>Profiles</h3>
                  <DriverProfiles socket={socket} />
                </div>
              </DashboardItem>
            </div>
            <div class="col-5 column">
              <DashboardSubRow>
                <SimpleSubsystem
                  name="Pivot"
                  socket={socket}
                  absolute
                  dashboardItem
                  fillContainer
                />
                <SimpleSubsystem
                  name="Extender"
                  socket={socket}
                  unit="in"
                  precision={1}
                  dashboardItem
                  fillContainer
                />
              </DashboardSubRow>
              <DashboardSubRow>
                <SimpleSubsystem
                  name="Wrist"
                  socket={socket}
                  absolute
                  dashboardItem
                  fillContainer
                />
                <SimpleSubsystem
                  name="Intake"
                  socket={socket}
                  velocity
                  precision={1}
                  unit="rpm"
                  dashboardItem
                  fillContainer
                />
              </DashboardSubRow>
              <DashboardItem>
                <div>
                  <h3>Actuator Testing</h3>
                  <ActuatorTesting socket={socket} />
                </div>
              </DashboardItem>
            </div>
          </div>
        </Container>
      ),
    },
    {
      title: "Variables",
      content: (
        <Container>very helpful thingy that is on the TODO list</Container>
      ),
    },
  ];

  return (
    <Container>
      <div class="row" style="padding-left: 1rem;">
        <div class="col column">
          <TabbedContainer tabs={tabs} />
        </div>
        <div class="col column" style="flex: 0 0 12rem;">
          <DashboardItem noBubble>
            <FlexRow>
              <label
                class="label-small"
                style="margin-right: 0; padding-right: 0;"
              >
                Loop (ms):{" "}
              </label>
              <NTReadout nt="Control_Loop_Time" precision={0} socket={socket} />
            </FlexRow>
          </DashboardItem>
          <DashboardItem noBubble>
            <MasterStates
              socket={socket}
              masterStates={["STOW", "FEED", "SCOR", "CLMB"]}
            />
          </DashboardItem>
        </div>
      </div>
    </Container>
  );
}
