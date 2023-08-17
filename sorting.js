function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function externalMergeSort(inputArray, chunkSize) {
    const chunks = [];
    
    // Divide the inputArray into chunks
    for (let i = 0; i < inputArray.length; i += chunkSize) {
        chunks.push(inputArray.slice(i, i + chunkSize));
    }

    const sortedChunks = chunks.map(chunk => mergeSort(chunk));
    const sortedArray = mergeSortedChunks(sortedChunks);
    
    return sortedArray;
}

function mergeSortedChunks(sortedChunks) {
    let result = sortedChunks[0];
    
    for (let i = 1; i < sortedChunks.length; i++) {
        result = merge(result, sortedChunks[i]);
    }

    return result;
}

function nPartitions(list, pivots) {
    const partitions = new Array(pivots.length + 1).fill().map(() => []);

    for (const num of list) {
        let partitionIndex = 0;
        while (partitionIndex < pivots.length && num >= pivots[partitionIndex]) {
            partitionIndex++;
        }
        partitions[partitionIndex].push(num);
    }

    return partitions.flat();
}


module.exports = {
    externalMergeSort:externalMergeSort,
    nPartitions:nPartitions
}


