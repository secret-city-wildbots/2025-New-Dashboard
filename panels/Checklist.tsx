import { h, Fragment } from "npm:preact";

import { Socket } from "socket.io-client";
import ChecklistItem from "../components/ChecklistItem.tsx";

interface ChecklistProps {
    socket: Socket;
}

const Checklist = ({ socket }: ChecklistProps) => {
    return (
        <ul>
            <ChecklistItem text="do the first step" />
            <ChecklistItem text="do the second step" />
            <ChecklistItem text="do the third step" />
            <ChecklistItem text="do the fourth step" />
            <ChecklistItem text="do the fifth step" />
            <ChecklistItem text="do the sixth step" />
            <ChecklistItem text="do the seventh step" />
        </ul>
    );
};

export default Checklist;