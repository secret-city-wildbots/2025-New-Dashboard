import { h } from "npm:preact";

interface BooleanReadoutProps {
    text: string;
    onColor?: string;
    offColor?: string;
    on?: boolean;
}

const BooleanReadout = ({
    text,
    onColor = "rgba(116, 255, 6, 0.8)",
    offColor = "rgba(200, 200, 200, 0.8)",
    on = false,
}:BooleanReadoutProps) => {
    return (
        <b class="boolean-readout" style={{
            backgroundColor: (on) ? onColor:offColor,
        }}>
            {text}
        </b>
    )
}

export default BooleanReadout;