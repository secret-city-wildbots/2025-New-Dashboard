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
    <div>
      <b style={ 
        { ...((angle) ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              color: color,
              width: (chars) ? `${chars*1.3}rem`:undefined,
              fontSize: "1.2rem",
              lineHeight: "1.2rem",
              paddingTop: "0.2rem",
              paddingBottom: "0.2rem",
            }:{
              display: "inline-block",
              color: color,
              width: (chars) ? `${chars*1.3}rem`:undefined,
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
              <div style="padding-right: 0.5rem;">{(angle) ? text?.toString().padStart(3, "0"):text}</div>
              <div><AngleDisplay angle={Number(text)} radius={25} /></div>
            </>
          ):(<>{text}</>)}
      </b>
    </div>
  );
};

export default Readout;