import { h } from "npm:preact";
import { useState, useEffect } from "npm:preact/hooks";
import Readout from "./Readout.tsx";
import { Socket } from "npm:socket.io-client";

interface NTReadoutProps {
  nt: string;
  socket: Socket;
  defaultVal?: any;
  chars?: number;
  precision?: number;
  color?: string;
  small?: boolean;
  index?: number;
  angle?: boolean;
  temperature?: boolean;
}

const NTReadout = ({
  nt,
  socket,
  defaultVal = "null",
  chars,
  precision,
  color = '#eed',
  small,
  index,
  angle = false,
  temperature = false,
}: NTReadoutProps) => {
  const [value, setValue] = useState(defaultVal);

  useEffect(() => {
    const handler = (newVal: any) => {
      if (newVal !== undefined && newVal !== null) {
        if (Array.isArray(newVal) && typeof index === "number") {
          newVal = newVal[index];
        }
        if (precision !== undefined) {
          if (precision == 0) {
            newVal = Math.floor(newVal);
          } else {
            newVal = newVal.toFixed(precision);
          }
        }
        setValue(newVal);
      }
    };

    socket.on(nt, handler);

    // Cleanup listener on unmount or if nt/socket changes
    return () => {
      socket.off(nt, handler);
    };
  }, [nt, socket, index, precision]); // re-register only if these change

  return (
    <Readout text={value !== undefined && value !== null ? value:null} angle={angle} temperature={temperature} small={small} color={color} chars={chars} />
  );
};

export default NTReadout;
