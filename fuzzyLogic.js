// Define a membership function for a triangular shape
function triangleMF(x, a, b, c) {
    if (x <= a || x >= c) {
      return 0;
    } else if (a < x && x <= b) {
      return (x - a) / (b - a);
    } else if (b < x && x < c) {
      return (c - x) / (c - b);
    }
  }
  
  // Create a fuzzy logic system
  function createFuzzyLogicSystem(rules) {
    return {
      rules,
      evaluate: function (inputs) {
        const results = {};
  
        // Evaluate each rule
        for (const rule of this.rules) {
          const { variable, membership, value } = rule;
  
          // Find the input value corresponding to the variable
          const inputValue = inputs[variable];
  
          if (inputValue === undefined) {
            throw new Error(`Input variable "${variable}" not found.`);
          }
  
          // Calculate the membership value using the membership function
          const membershipValue = triangleMF(inputValue, ...membership);
  
          // Apply the fuzzy logic rule using "OR" operator
          if (!(value in results) || membershipValue > results[value]) {
            results[value] = membershipValue;
          }
        }
  
        return results;
      },
    };
  }


  function centroidDefuzzification(fuzzySet, decimalPlaces = 2) {
    let numerator = 0;
    let denominator = 0;
  
    for (const key in fuzzySet) {
      numerator += parseFloat(key) * fuzzySet[key];
      denominator += fuzzySet[key];
    }
  
    const result = numerator / denominator;
  
    return parseFloat(result.toFixed(decimalPlaces));
  }

  function fuzzyAND(setA, setB) {
    const result = {};
    for (const key in setA) {
      if (setB[key]) {
        result[key] = Math.min(setA[key], setB[key]);
      }
    }
    return result;
  }


  function fuzzify(value, membershipFunctionParams) {
    const fuzzySet = {};
    for (const key in membershipFunctionParams) {
      const [a, b, c] = membershipFunctionParams[key];
      fuzzySet[key] = triangleMF(value, a, b, c);
    }
    return fuzzySet;
  }


  function fuzzyOperation(operation,decimalPlaces=2,...sets) {
    if (sets.length < 1) {
      throw new Error("At least two sets are required for a fuzzy operation.");
    }
  
    // Ensure that all sets have the same elements
    const elements = Object.keys(sets[0]);
    for (let i = 1; i < sets.length; i++) {
      const setElements = Object.keys(sets[i]);
      if (!elements.every((element) => setElements.includes(element))) {
        throw new Error("All sets must have the same elements for the operation.");
      }
    }
  
    const result = {};
  
    switch (operation.toUpperCase()) {
      case "AND":
        for (const element of elements) {
          const minMembership = Math.min(...sets.map((set) => set[element]));
          result[element] = parseFloat(minMembership.toFixed(decimalPlaces));
        }
        break;
      case "OR":
        for (const element of elements) {
          const maxMembership = Math.max(...sets.map((set) => set[element]));
          result[element] = parseFloat(maxMembership.toFixed(decimalPlaces));
        }
        break;
      case "NOT":
        for (const element of elements) {
          const notMembership = 1 - sets[0][element];
          result[element] = parseFloat(notMembership.toFixed(decimalPlaces));
        }
        break;
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
  
    return result;
  }
  
module.exports = {
    createFuzzyLogicSystem:createFuzzyLogicSystem,
    centroidDefuzzification:centroidDefuzzification,
    fuzzyAND:fuzzyAND,
    fuzzify:fuzzify,
    fuzzyOperation:fuzzyOperation
}