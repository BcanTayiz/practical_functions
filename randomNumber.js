function randomRange(min,max,round=2){
    x = Math.random() * (max - min) + min;
    return Math.round(x*Math.pow(10,round)) / Math.pow(10,round)
}


function shuffleArrayRandom(array) {
    if(!Array.isArray(array)){
        throw Error('Value should be an array')
    }

    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function getRandomItemsFromArray(array, count) {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    if (count >= array.length) {
        return array.slice(); // Return a copy of the whole array
    }

    const shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray.slice(0, count);
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomItems = getRandomItemsFromArray(originalArray, 3);

console.log(randomItems);


module.exports = {
    randomRange: randomRange,
    shuffleArrayRandom:shuffleArrayRandom,
    getRandomItemsFromArray,getRandomItemsFromArray
};
