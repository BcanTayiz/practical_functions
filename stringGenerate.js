function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset.charAt(randomIndex);
    }
  
    return randomString;
  }

  function countWords(text) {
    // Split the text into words by spaces and punctuation marks
    const words = text.split(/\s+|[,.;?!()]+/);
    
    // Create an object to store word counts
    const wordCounts = {};

    // Count the occurrences of each word
    words.forEach(word => {
        // Remove leading and trailing punctuation and convert to lowercase
        const cleanedWord = word.replace(/^[.,;?!()]+|[.,;?!()]+$/g, '').toLowerCase();
        
        if (cleanedWord) { // Check if the word is not empty
            wordCounts[cleanedWord] = (wordCounts[cleanedWord] || 0) + 1;
        }
    });

    return wordCounts;
}


module.exports = {
    generateRandomString:generateRandomString,
    countWords:countWords
}