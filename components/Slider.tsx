import { h, Fragment } from "npm:preact";
import { useEffect, useRef, useState } from "npm:preact/hooks";

interface SliderProps {
    min: number;
    max: number;
    valSetter?: (newVal: number) => void;
    defaultVal?: number;
}

const Slider = ({ min, max, valSetter = () => {}, defaultVal }: SliderProps) => {
    if (defaultVal == undefined || defaultVal == null) {
        defaultVal = min;
    }

    let { val, setVal } = useState(defaultVal);
    let rangeRef = useRef(null);

    let valSetterWrapper = (newVal) => {
        if (valSetter) {
            valSetter(newVal);
        }
    }

    useEffect(() => {
        if (rangeRef.current) {
            rangeRef.current.value = val;
        }
    })

    return (
        <div class="bubble checklist-item">
            <input type="range" class="form-range" min={min} max={max} value={val} ref={rangeRef} />
        </div>
    );
};

export default Slider;

/* >   defaultVal setup
>   Val Setter
>   useEffects */
