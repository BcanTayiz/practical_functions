function booleanOperation(inputArray, operation) {
    if (operation === "AND") {
      return inputArray.every(Boolean);
    } else if (operation === "OR") {
      return inputArray.some(Boolean);
    } else {
      throw new Error("Invalid operation. Supported operations are 'AND' and 'OR'.");
    }
  }

  function calculateBooleanAlgebra(objects) {
    if (!Array.isArray(objects) || objects.length === 0) {
      throw new Error('Input should be a non-empty array of objects.');
    }
  
    let result = objects[0].value;
  
    for (let i = 1; i < objects.length; i++) {
      const { operation, value } = objects[i];
  
      switch (operation) {
        case 'AND':
          result = result && value;
          break;
        case 'OR':
          result = result || value;
          break;
        case 'XOR':
          result = (result || value) && !(result && value);
          break;
        case 'NOT':
          result = !value;
          break;
        default:
          throw new Error(`Unsupported operation: ${operation}`);
      }
    }
  
    return result;
  }
  


module.exports = {
    booleanOperation:booleanOperation,
    calculateBooleanAlgebra:calculateBooleanAlgebra,
}