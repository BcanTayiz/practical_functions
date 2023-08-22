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


module.exports={
    swapArrayElements:swapArrayElements,
    rotateArray:rotateArray
}