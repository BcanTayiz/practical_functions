function calculateYScaleMax(value) {
    const orderOfMagnitude = Math.pow(10, Math.floor(Math.log10(value)));
    return Math.ceil(value / orderOfMagnitude) * orderOfMagnitude;
}





module.exports = {
    calculateYScaleMax:calculateYScaleMax
}