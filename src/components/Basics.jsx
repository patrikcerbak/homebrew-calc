import HBCUtils from "../utils";

function sgToPlato(sg) {
    if (sg !== "") {
        return HBCUtils.roundToDecimals(-460.234 + 662.649 * sg - 202.41 * sg ** 2, 1);
        // Sources: Manning (1993), Basarova (2010)
    } else {
        return "-";
    }
}

function abv(og, fg) {
    if (og !== "" && fg !== "") {
        return HBCUtils.roundToDecimals(
            fg * ((5118 * (og ** 2 - fg ** 2) + 16755 * (fg - og)) / (8.739 * og ** 4 - 57.22 * og ** 3 + 89.09 * og ** 2 + 14.95 * og - 105.99)),
        1);
        // Source: Novotny (2019)
    } else {
        return "-";
    }
}

function Basics({og, fg, ogUpdate, fgUpdate}) {
    return (
        <div>
            <h2>Basic Information</h2>

            <label htmlFor="og">OG:</label>
            <input id="og" type="text" value={og} onChange={ogUpdate}></input>

            <label htmlFor="fg">FG:</label>
            <input id="fg" type="text" value={fg} onChange={fgUpdate}></input>

            <ul>
                <li>Original extract: {sgToPlato(og)} °P</li>
                <li>ABV: {abv(og, fg)} %</li>
            </ul>
        </div>
    );
}

export default Basics;