import { useState } from "react";
import Basics from "./components/Basics";
import HBCUtils from "./utils";

function updateValue(event, pattern, setFunction) {
    const val = HBCUtils.unifyDecimalSeparator(event.target.value);
    if (HBCUtils.patternCheck(pattern, val)) {
        setFunction(val);
    }
}

function Calc() {
    const [og, setOg] = useState("");
    const [fg, setFg] = useState("");
    const [volume, setVolume] = useState("");
    const ogUpdate = (e) => {
        console.log(e.target.id);
        updateValue(e, /^[01](\.[0-9]*)?$/, setOg);
    }
    const fgUpdate = (e) => {
        updateValue(e, /^[01](\.[0-9]*)?$/, setFg);
    }
    const volumeUpdate = (e) => {
        updateValue(e, /^[0-9]+(\.[0-9]*)?$/, setVolume);
    }

    return (
        <>
            <Basics og={og} fg={fg} volume={volume} ogUpdate={ogUpdate} fgUpdate={fgUpdate} volumeUpdate={volumeUpdate} />
        </>
    );
}

export default Calc;
