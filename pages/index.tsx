import { h } from "npm:preact";
import { io } from "npm:socket.io-client";
import TabbedContainer from "../components/TabbedContainer.tsx";
import Container from "../components/Container.tsx";
import DashboardItem from "../components/DashboardItem.tsx";
import Switch from "../components/Switch.tsx";
import Button from "../components/Button.tsx";
import ArmableButton from "../components/ArmableButton.tsx";
import Readout from "../components/Readout.tsx";
import NTReadout from "../components/NTReadout.tsx";
import SimpleSubsystem from "../components/SimpleSubsystem.tsx";
import SwerveModules from "../components/SwerveModules.tsx";
import BooleanReadout from "../components/BooleanReadout.tsx";
import NTBooleanReadout from "../components/NTBooleanReadout.tsx";

export default function () {
    const socket = io();

    socket.on("Swerve_0_Details", (vari: number[]) => {
        console.log(vari);
    });

    const tabs = [
        {
            title: "Checklist",
            content: (
                <Container>
                    Checklist thingy idk. Pretty low-priority ngl
                </Container>
            ),
        },
        {
            title: "Setup/Auto",
            content: (
                <Container>
                    Setup stuffs. probably gonna make this at some point
                </Container>
            ),
        },
        {
            title: "TeleOp",
            content: <Container>oooh camera feeds. very sleek</Container>,
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
                                    <SwerveModules
                                        socket={socket}
                                        shifting
                                        dashboardItem
                                    />
                                </div>
                            </DashboardItem>
                        </div>
                        <div class="col-4 column">
                            <DashboardItem>
                                <h3>Profiles</h3>
                            </DashboardItem>
                            <DashboardItem>
                                <h3>Actuator Testing</h3>
                            </DashboardItem>
                        </div>
                        <div class="col-4 column">
                            <SimpleSubsystem
                                name="Pivot"
                                socket={socket}
                                absolute
                                dashboardItem
                            />
                            <SimpleSubsystem
                                name="Extender"
                                socket={socket}
                                unit="in"
                                precision={1}
                                dashboardItem
                            />
                            <SimpleSubsystem
                                name="Wrist"
                                socket={socket}
                                absolute
                                dashboardItem
                            />
                            <SimpleSubsystem
                                name="Intake"
                                socket={socket}
                                velocity
                                precision={1}
                                unit="rpm"
                                dashboardItem
                            />
                        </div>
                    </div>
                </Container>
            ),
        },
        {
            title: "Variables",
            content: (
                <Container>
                    very helpful thingy that is on the TODO list
                </Container>
            ),
        },
    ];

    return (
        <Container>
            <div class="row" style="padding-left: 1rem;">
                <div class="col-lg-10 col-md-9 column">
                    <TabbedContainer tabs={tabs} />
                </div>
                <div class="col-lg-2 col-md-3 column">
                    <DashboardItem noBubble>
                        <label style="margin-right: 0.5rem;">Looptime: </label>
                        <NTReadout
                            nt="Control_Loop_Time"
                            precision={0}
                            chars={2}
                            socket={socket}
                        />
                    </DashboardItem>
                    <DashboardItem noBubble>
                        <NTBooleanReadout
                            text="SIGMA"
                            socket={socket}
                            nt="Sigma_Active0"
                        />
                        <NTBooleanReadout
                            text="SIGMA"
                            socket={socket}
                            nt="Sigma_Active1"
                        />
                    </DashboardItem>
                </div>
            </div>
        </Container>
    );
}
