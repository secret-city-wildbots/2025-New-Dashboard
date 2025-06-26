import { h, Fragment } from "npm:preact";

import { Socket } from "socket.io-client";
import DashboardItem from "../components/DashboardItem.tsx";

interface PlaceholderProps {
    text: string;
    height?: number;
}

const Placeholder = ({ text, height = 5 }: PlaceholderProps) => {

    return (
        <DashboardItem>
            <div style={`width: 100%; text-align: center; height:${height}rem; font-size: 2rem;`}>
                {text}
            </div>
        </DashboardItem>
    );
};

export default Placeholder;