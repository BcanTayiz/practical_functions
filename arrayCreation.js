function createArrayWithValues(length, value) {
    const newArray = new Array(length).fill(value);
    return newArray;
}


function createRandomArray(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function createArrayWithRepeatedValue(length, value) {
    return Array.from({ length }, () => value);
}

function createBooleanArray(length, value) {
    return Array.from({ length }, () => value);
}

function createEmptyArray(length) {
    return new Array(length);
}

function createDateArray(startDate, endDate) {
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
}


function create2DArray(rows, cols, initialValue) {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => initialValue));
}

function createSubarrays(arr, size) {
    const subarrays = [];
    for (let i = 0; i < arr.length; i += size) {
        subarrays.push(arr.slice(i, i + size));
    }
    return subarrays;
}

function createRandomArrayFromList(list, length) {
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * list.length);
        randomArray.push(list[randomIndex]);
    }

    return randomArray;
}


function createBinsFromArray(dataArray, numBins) {
    if (numBins <= 0) {
        throw new Error("Number of bins must be greater than 0.");
    }

    const minValue = Math.min(...dataArray);
    const maxValue = Math.max(...dataArray);
    const binSize = (maxValue - minValue) / numBins;

    const bins = [];
    for (let i = 0; i < numBins; i++) {
        const binMin = minValue + i * binSize;
        const binMax = binMin + binSize;
        bins.push([binMin, binMax]);
    }

    return bins;
}







module.exports = {
    createArrayWithValues:createArrayWithValues,
    createRandomArray:createRandomArray,
    createArrayWithRepeatedValue:createArrayWithRepeatedValue,
    createBooleanArray:createBooleanArray,
    createEmptyArray:createEmptyArray,
    createDateArray:createDateArray,
    create2DArray:create2DArray,
    createSubarrays:createSubarrays,
    createRandomArrayFromList:createRandomArrayFromList,
    createBinsFromArray:createBinsFromArray
}