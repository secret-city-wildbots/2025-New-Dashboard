import { h } from "npm:preact";
import { useState, useEffect } from "npm:preact/hooks";
import BooleanReadout from "./BooleanReadout.tsx";
import { Socket } from "npm:socket.io-client";

interface NTBooleanReadoutProps {
    nt: string;
    socket: Socket;
    text: string;
    defaultVal?: boolean;
    index?: number;
    onColor?: string;
    offColor?: string;
}

const NTBooleanReadout = ({
    nt,
    socket,
    text,
    defaultVal = false,
    index,
    onColor,
    offColor,
}:NTBooleanReadoutProps) => {
    const [value, setValue] = useState(defaultVal);

    useEffect(() => {
        const handler = (newVal:boolean) => {
            if (newVal !== undefined && newVal !== null) {
                if (Array.isArray(newVal) && typeof index === "number") {
                    newVal = newVal[index];
                }

                setValue(newVal);
            }
        }

        socket.on(nt, handler);

        // Cleanup listener on unmount or if nt/socket changes
        return () => {
        socket.off(nt, handler);
        };
    }, [nt, socket, index])

    return (
        <BooleanReadout text={text} onColor={onColor} offColor={offColor} on={value} />
    )
}

export default NTBooleanReadout;