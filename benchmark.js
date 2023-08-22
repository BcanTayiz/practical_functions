function findFastFunc(functions, testData) {
    let fastestFunction = null;
    let fastestExecutionTime = Infinity;

    // Function to check if a function throws an error
    function isRobust(func) {
        try {
            func(testData);
            return true; // No error thrown
        } catch (error) {
            return false; // Error thrown
        }
    }

    // Loop through each function and measure its execution time
    for (const func of functions) {
        const startTime = performance.now();
        const isFunctionRobust = isRobust(func);

        if (isFunctionRobust) {
            const endTime = performance.now();
            const executionTime = endTime - startTime;

            if (executionTime < fastestExecutionTime) {
                fastestExecutionTime = executionTime;
                fastestFunction = func;
            }
        }
    }

    return fastestFunction;
}

// Revised isRobust function that accepts the function to test and data
function isRobust(func, testData) {
    try {
        func(testData);
        return true; // No error thrown
    } catch (error) {
        return false; // Error thrown
    }
}

// Revised findSlowFunc function
function findSlowFunc(functions, testData) {
    let slowestFunction = null;
    let slowestExecutionTime = 0;

    for (const func of functions) {
        const startTime = performance.now();
        const isFunctionRobust = isRobust(func, testData);

        if (isFunctionRobust) {
            const endTime = performance.now();
            const executionTime = endTime - startTime;

            if (executionTime > slowestExecutionTime) {
                slowestExecutionTime = executionTime;
                slowestFunction = func;
            }
        }
    }

    return slowestFunction;
}

// Revised findMostRobustFunc function
function findMostRobustFunc(functions, testCases) {
    let mostRobustFunction = null;
    let maxSuccessfulTests = 0;

    for (const func of functions) {
        let successfulTests = 0;

        for (const testCase of testCases) {
            if (isRobust(func, testCase)) {
                successfulTests++;
            }
        }

        if (successfulTests > maxSuccessfulTests) {
            maxSuccessfulTests = successfulTests;
            mostRobustFunction = func;
        }
    }

    return mostRobustFunction;
}

function measureAverageExecutionTime(func, testCases) {
    let totalExecutionTime = 0;

    for (const testCase of testCases) {
        const startTime = performance.now();
        func(testCase);
        const endTime = performance.now();
        totalExecutionTime += endTime - startTime;
    }

    const averageExecutionTime = totalExecutionTime / testCases.length;
    return averageExecutionTime;
}

// Revised compareFunctions function
function compareFunctions(func1, func2, testData) {
    const executionTime1 = measureAverageExecutionTime(func1, testData);
    const executionTime2 = measureAverageExecutionTime(func2, testData);

    if (executionTime1 < executionTime2) {
        return `${func1.toString()} is faster.`; // Use .toString() to get the function name
    } else if (executionTime1 > executionTime2) {
        return `${func2.toString()} is faster.`; // Use .toString() to get the function name
    } else {
        return "Both functions have similar execution times.";
    }
}

// Revised autoSelectFunction function
function autoSelectFunction(functions, testCases) {
    const mostRobust = findMostRobustFunc(functions, testCases);
    const slowest = findSlowFunc(functions, testCases[0]); // Use the first test case for measuring

    if (mostRobust === slowest) {
        return mostRobust;
    }

    const averageTimeThreshold = 100; // Adjust this threshold as needed
    const averageTimeMostRobust = measureAverageExecutionTime(mostRobust, testCases);
    const averageTimeSlowest = measureAverageExecutionTime(slowest, testCases);

    if (averageTimeSlowest > averageTimeThreshold * averageTimeMostRobust) {
        return mostRobust;
    } else {
        return slowest;
    }
}


module.exports = {
    findFastFunc:findFastFunc,
    findSlowFunc:findSlowFunc,
    findMostRobustFunc:findMostRobustFunc,
    measureAverageExecutionTime:measureAverageExecutionTime,
    compareFunctions:compareFunctions,
    autoSelectFunction:autoSelectFunction
}