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

function subsetsWithSum(arr, targetSum) {
    const subsets = [];

    function backtrack(start, currentSubset, currentSum) {
        if (currentSum === targetSum) {
            subsets.push([...currentSubset]);
            return;
        }
        if (currentSum > targetSum || start === arr.length) {
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            currentSum += arr[i];
            backtrack(i + 1, currentSubset, currentSum);
            currentSubset.pop();
            currentSum -= arr[i];
        }
    }

    backtrack(0, [], 0);

    return subsets;
}

function subsetsWithProduct(arr, targetProduct) {
    const subsets = [];

    function backtrack(start, currentSubset, currentProduct) {
        if (currentProduct === targetProduct) {
            subsets.push([...currentSubset]);
            return;
        }
        if (currentProduct > targetProduct || start === arr.length) {
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            currentProduct *= arr[i];
            backtrack(i + 1, currentSubset, currentProduct);
            currentSubset.pop();
            currentProduct /= arr[i];
        }
    }

    backtrack(0, [], 1);

    return subsets;
}





module.exports = {
    generateSubsets:generateSubsets,
    generateNLengthSubsets:generateNLengthSubsets,
    subsetsWithSum:subsetsWithSum,
    subsetsWithProduct:subsetsWithProduct,
}