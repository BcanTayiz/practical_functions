function performArrayOperation(arr1, arr2, operation) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];
  
    for (let i = 0; i < maxLength; i++) {
      const val1 = arr1[i % arr1.length] || 0;
      const val2 = arr2[i % arr2.length] || 0;
  
      switch (operation) {
        case "multiply":
          result.push(val1 * val2);
          break;
        case "add":
          result.push(val1 + val2);
          break;
        case "subtract":
          result.push(val1 - val2);
          break;
        case "divide":
          if (val2 === 0) {
            throw new Error("Division by zero is not allowed.");
          }
          result.push(val1 / val2);
          break;
        default:
          throw new Error("Unsupported operation.");
      }
    }
  
    return result;
  }

  function polygonArea(vertices) {
    if (vertices.length < 3) {
        return 0; // A polygon with less than 3 vertices has no area.
    }

    let area = 0;
    for (let i = 0; i < vertices.length; i++) {
        const j = (i + 1) % vertices.length;
        area += vertices[i].x * vertices[j].y;
        area -= vertices[j].x * vertices[i].y;
    }
    
    return Math.abs(area / 2);
}

function moduleNegative(n) {
    return ((this % n) + n) % n;
}

function evaluatePolynomial(coefficients, x) {
    let result = 0;
    let powerOfX = 1;

    for (let i = 0; i < coefficients.length; i++) {
        result += coefficients[i] * powerOfX;
        powerOfX *= x;
    }

    return result;
}


function findRoot(coefficients, initialGuess, tolerance = 1e-6, maxIterations = 100) {
    let x = initialGuess;
    let iteration = 0;

    while (iteration < maxIterations) {
        const f_x = evaluatePolynomial(coefficients, x);
        const f_prime_x = evaluateDerivative(coefficients, x);

        if (Math.abs(f_x) < tolerance) {
            return x; // Found a root within tolerance
        }

        x = x - f_x / f_prime_x;
        iteration++;
    }

    return null; // No root found within the maximum number of iterations
}

function evaluatePolynomial(coefficients, x) {
    let result = 0;
    let powerOfX = 1;

    for (let i = 0; i < coefficients.length; i++) {
        result += coefficients[i] * powerOfX;
        powerOfX *= x;
    }

    return result;
}

function evaluateDerivative(coefficients, x) {
    let result = 0;
    let powerOfX = 1;

    for (let i = 1; i < coefficients.length; i++) {
        result += i * coefficients[i] * powerOfX;
        powerOfX *= x;
    }

    return result;
}


module.exports = {
    performArrayOperation:performArrayOperation,
    polygonArea:polygonArea,
    moduleNegative:moduleNegative,
    evaluatePolynomial:evaluatePolynomial,
    findRoot:findRoot
}