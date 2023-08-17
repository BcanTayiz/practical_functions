
function findMatchingCombinations(conditionFunction, argsArray, numVariables) {
    const solutions = [];

    function checkCombination(combination) {
        if (conditionFunction(...combination)) {
            solutions.push(combination);
        }
    }

    function generateCombinations(elements, combination, index) {
        if (combination.length === numVariables) {
            checkCombination(combination);
            return;
        }

        for (let i = index; i < elements.length; i++) {
            generateCombinations(elements, [...combination, elements[i]], i + 1);
        }
    }

    generateCombinations(argsArray, [], 0);
    return solutions;
}



module.exports = {
    findMatchingCombinations:findMatchingCombinations
}