function generateSubsets(arr) {
    const subsets = [];

    function backtrack(start, currentSubset) {
        // Add the current subset to the list of subsets
        subsets.push([...currentSubset]);

        // Generate subsets by adding each element to the current subset
        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    backtrack(0, []);

    return subsets;
}

function generateNLengthSubsets(arr, n) {
    const subsets = [];

    function backtrack(start, currentSubset) {
        if (currentSubset.length === n) {
            subsets.push([...currentSubset]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    backtrack(0, []);

    return subsets;
}


module.exports = {
    generateSubsets:generateSubsets,
    generateNLengthSubsets:generateNLengthSubsets
}