import { useState } from "react";
import Basics from "./components/Basics";
import HBCUtils from "./utils";

function Calc() {
    const [og, setOg] = useState("");
    const [fg, setFg] = useState("");
    const ogUpdate = (e) => {
        setOg(HBCUtils.unifyDecimalSeparator(e.target.value));
    }
    const fgUpdate = (e) => {
        setFg(HBCUtils.unifyDecimalSeparator(e.target.value));
    }

    return (
        <>
            <Basics og={og} fg={fg} ogUpdate={ogUpdate} fgUpdate={fgUpdate} />
        </>
    );
}

export default Calc;
