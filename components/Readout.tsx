import { h, Fragment } from 'npm:preact';
import AngleDisplay from "./AngleDisplay.tsx";

interface ReadoutProps {
  text?: string|number;
  chars?: number;
  color?: string;
  small?: boolean;
  angle?: boolean;
  temperature?: boolean;
}

const Readout = ({
  text,
  chars,
  angle = false,
  small = false,
  color = '#eed',
  temperature = false,
}: ReadoutProps) => {
  return (
    <b style={ 
      { ...((angle) ? {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            color: color,
            width: (chars) ? (chars*1.5)+"rem":undefined,
          }:{
            color: color,
            width: (chars) ? (chars*1.5)+"rem":undefined,
          }),
          ...((temperature) ? (
            (Number(text) > 60) ? (
              {
                borderColor: "red",
              }
            ):(
              (Number(text) > 50) ? (
                {
                  borderColor: "yellow",
                }
              ):({})
            )
          ):({}))
        }
      }
        class={"readout"+(small ? " small":"")}>
        
        {angle ? (
          <>
            <div style="padding-right: 0.5rem;">{text}</div>
            <div><AngleDisplay angle={Number(text)} /></div>
          </>
        ):(<>{text}</>)}
    </b>
  );
};

export default Readout;