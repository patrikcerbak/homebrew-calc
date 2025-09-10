class HBCUtils {
    static roundToDecimals(number, decimals) {
        const helper = 10 ** decimals;
        return Math.round(number * helper) / helper;
    }

    static unifyDecimalSeparator(string) {
        return string.replace(",", ".");
    }

    // TODO: implement pattern checker
}

export default HBCUtils;
