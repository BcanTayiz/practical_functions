function convertMemory(value, fromUnit, toUnit) {
    const units = {
        bit: 1,
        byte: 8,
        kilobyte: 8 * 1024,
        megabyte: 8 * 1024 * 1024,
        gigabyte: 8 * 1024 * 1024 * 1024,
        terabyte: 8 * 1024 * 1024 * 1024 * 1024,
        petabyte: 8 * 1024 * 1024 * 1024 * 1024 * 1024
    };

    if (!(fromUnit in units) || !(toUnit in units)) {
        throw new Error("Invalid unit provided.");
    }

    const convertedValue = (value * units[fromUnit]) / units[toUnit];
    return convertedValue;
}






module.exports = {
    convertMemory:convertMemory
}