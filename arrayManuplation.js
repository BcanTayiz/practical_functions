function swapArrayElements(array, index1, index2) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array');
    }

    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        throw new Error('Invalid indices');
    }

    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array
}


module.exports={
    swapArrayElements:swapArrayElements
}