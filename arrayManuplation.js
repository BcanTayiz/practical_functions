const {toFixedNum} =  require('./mathPractical')
const {randomRange} = require('./randomNumber')


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

function rotateArray(array, positions, direction = 'right') {
    const len = array.length;
    if (len === 0) return array;
  
    positions = positions % len;
    if (positions < 0) positions += len;
  
    if (direction === 'right') {
      for (let i = 0; i < positions; i++) {
        swapArrayElements(array, len - 1 - i, len - 2 - i);
      }
    } else if (direction === 'left') {
      for (let i = 0; i < positions; i++) {
        swapArrayElements(array, i, i + 1);
      }
    } else {
      throw new Error('Invalid direction. Use "left" or "right".');
    }
  
    return array;
  }

  function chunkArray(arr, chunkSize) {
    if (!Array.isArray(arr) || chunkSize <= 0) {
        throw Error('Invalid input');
    }

    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }

    return result;
}


function arrayToMatrix(arr, n, m) {
  if (!Array.isArray(arr) || n <= 0 || m <= 0) {
      throw Error('Invalid input');
  }

  const totalElements = n * m;
  if (arr.length !== totalElements) {
      throw Error('Array length is not compatible with the matrix dimensions');
  }

  const matrix = [];
  for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < m; j++) {
          row.push(arr[i * m + j]);
      }
      matrix.push(row);
  }

  return matrix;
}

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          // If the element is an array, recursively flatten it
          result = result.concat(flattenArray(arr[i]));
      } else {
          // If the element is not an array, add it to the result
          result.push(arr[i]);
      }
  }

  return result;
}

function addNoiseToArray(arr, noiseLevel,toFixedLevel=2) {
  if (!Array.isArray(arr) || typeof noiseLevel !== 'number' || noiseLevel < 0 || noiseLevel > 100) {
    throw new Error('Invalid input. Please provide an array and a noise level between 0 and 100.');
  }

  // Calculate the noise range based on the noise level
  const minNoise = -noiseLevel / 200; // Half of the noise level as a fraction
  const maxNoise = noiseLevel / 200; // Half of the noise level as a fraction

  // Create a new array with noisy values
  const noisyArray = arr.map((value) => {
    // Generate random noise within the calculated range
    const noise = minNoise + Math.random() * (maxNoise - minNoise);
    // Apply the noise to the original value
    const noisyValue = value + value * noise;
    return toFixedNum(noisyValue,toFixedLevel)
  });

  return noisyArray;
}

function smoothAndRemoveNoise(arr, smoothingFactor,toFixedLevel=2) {
  if (!Array.isArray(arr) || typeof smoothingFactor !== 'number' || smoothingFactor < 0 || smoothingFactor > 1) {
    throw new Error('Invalid input. Please provide an array and a smoothing factor between 0 and 1.');
  }

  const smoothedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const prevValue = smoothedArray[i - 1] || arr[i];
    const nextValue = arr[i + 1] || arr[i];
    const smoothedValue = arr[i] + smoothingFactor * (prevValue + nextValue - 2 * arr[i]);
    smoothedArray.push(toFixedNum(smoothedValue,toFixedLevel));
  }

  return smoothedArray;
}

function reverseNoiseSmooth(arr, noiseLevel, smoothingFactor,toFixedLevel=2) {
  const denoisedArray = smoothAndRemoveNoise(arr, smoothingFactor);
  const minNoise = -noiseLevel / 200;
  const maxNoise = noiseLevel / 200;

  const originalArray = denoisedArray.map((value) => {
    const noise = minNoise + Math.random() * (maxNoise - minNoise);
    const originalValue = value / (1 + noise);
    return toFixedNum(originalValue,toFixedLevel);
  });

  return originalArray;
}


function fillArrayToRange(arr, minValue, maxValue) {
  if (!Array.isArray(arr) || typeof minValue !== 'number' || typeof maxValue !== 'number' || minValue >= maxValue) {
    throw new Error('Invalid input. Please provide an array, a minimum value, and a maximum value.');
  }

  const adjustedArray = [...arr];

  // Helper function to generate a random number within a specified range
  function randomRange(min, max, decimals) {
    return +(min + Math.random() * (max - min)).toFixed(decimals);
  }

  // Add or subtract values to the array to ensure it stays within the specified range
  for (let i = 0; i < adjustedArray.length; i++) {
    let value = adjustedArray[i];

    if (typeof value !== 'number') {
      throw new Error('Array contains non-numeric values.');
    }

    if (value < minValue) {
      while (adjustedArray[i] < minValue) {
        const difference = randomRange(value, minValue, 2);
        adjustedArray[i] += difference;
        adjustedArray[i] = parseFloat(adjustedArray[i].toFixed(2)); // Ensure two decimal places
      }
    } else if (value > maxValue) {
      while (adjustedArray[i] > maxValue) {
        const difference = randomRange(maxValue, value, 2);
        adjustedArray[i] -= difference;
        adjustedArray[i] = parseFloat(adjustedArray[i].toFixed(2)); // Ensure two decimal places
      }
    }
  }

  return adjustedArray;
}

function adjustArrayToRange(arr, minValue, maxValue) {
  if (!Array.isArray(arr) || typeof minValue !== 'number' || typeof maxValue !== 'number' || minValue >= maxValue) {
    throw new Error('Invalid input. Please provide an array, a minimum value, and a maximum value.');
  }

  const adjustedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (typeof value !== 'number') {
      throw new Error('Array contains non-numeric values.');
    }

    let adjustedValue = value;

    // Ensure the value is within the specified range
    if (value < minValue) {
      adjustedValue = minValue;
    } else if (value > maxValue) {
      adjustedValue = maxValue;
    }

    adjustedArray.push(adjustedValue);
  }

  return adjustedArray;
}


module.exports={
    swapArrayElements:swapArrayElements,
    rotateArray:rotateArray,
    chunkArray:chunkArray,
    arrayToMatrix:arrayToMatrix,
    flattenArray:flattenArray,
    addNoiseToArray:addNoiseToArray,
    smoothAndRemoveNoise:smoothAndRemoveNoise,
    reverseNoiseSmooth:reverseNoiseSmooth,
    fillArrayToRange:fillArrayToRange,
    adjustArrayToRange:adjustArrayToRange,
}