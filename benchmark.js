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


module.exports = {
    findFastFunc:findFastFunc
}