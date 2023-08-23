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

module.exports={
    swapArrayElements:swapArrayElements,
    rotateArray:rotateArray,
    chunkArray:chunkArray,
    arrayToMatrix:arrayToMatrix,
    flattenArray:flattenArray
}