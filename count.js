function countMatchesInText(text, searchItems) {
    const counts = {};

    searchItems.forEach((searchItem) => {
        const regex = new RegExp(searchItem, 'g');
        const matches = text.match(regex);
        counts[searchItem] = matches ? matches.length : 0;
    });

    return counts;
}


function countSelectedValues(valuesToCount, valuesGiven) {
    const counts = {};

    valuesGiven.forEach((value) => {
        counts[value] = valuesToCount.filter((item) => item === value).length;
    });

    return counts;
}

function countValuesInBins(dataArray, binArray) {
    const counts = {};

    binArray.forEach((bin) => {
        const [min, max] = bin;
        counts[`${min}-${max}`] = dataArray.filter((value) => value >= min && value < max).length;
    });

    return counts;
}


module.exports = {
    countMatchesInText:countMatchesInText,
    countSelectedValues:countSelectedValues,
    countValuesInBins:countValuesInBins
}