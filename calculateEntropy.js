function calculateEntropy(sequence) {
    // Count the occurrences of 0s and 1s
    let count0 = 0;
    let count1 = 0;
  
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] === '0') {
        count0++;
      } else if (sequence[i] === '1') {
        count1++;
      }
    }
  
    // Calculate probabilities
    const totalLength = sequence.length;
    const p0 = count0 / totalLength;
    const p1 = count1 / totalLength;
  
    // Check for zero probabilities
    if (p0 === 0 || p1 === 0) {
      return 0; // Entropy is zero if any probability is zero
    }
  
    // Calculate entropy
    const entropy = -((p0 * Math.log2(p0)) + (p1 * Math.log2(p1)));
  
    return entropy;
  }

  module.exports = {
    calculateEntropy:calculateEntropy
  }