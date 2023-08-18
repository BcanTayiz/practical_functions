function normalizeList(list, minRange, maxRange) {
    const minValue = Math.min(...list);
    const maxValue = Math.max(...list);

    const normalizedList = list.map(value =>
        minRange + (value - minValue) * (maxRange - minRange) / (maxValue - minValue)
    );

    return normalizedList;
}






module.exports = {
    normalizeList:normalizeList
}