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

  function calculateInformationGain(sequence, criteriaIndex) {
    // Ensure the criteriaIndex is within bounds
    if (criteriaIndex < 0 || criteriaIndex >= sequence.length) {
      throw new Error('Invalid criteria index');
    }
  
    const leftSubset = sequence.slice(0, criteriaIndex + 1);
    const rightSubset = sequence.slice(criteriaIndex + 1);
  
    // Calculate entropy for the whole sequence
    const totalEntropy = calculateEntropy(sequence);
  
    // Calculate entropy for the left and right subsets
    const entropyLeft = calculateEntropy(leftSubset);
    const entropyRight = calculateEntropy(rightSubset);
  
    // Calculate the weighted average of the entropies
    const weightedAverageEntropy = (leftSubset.length / sequence.length) * entropyLeft
                                   + (rightSubset.length / sequence.length) * entropyRight;
  
    // Information Gain is the reduction in entropy
    const informationGain = totalEntropy - weightedAverageEntropy;
    return informationGain;
  }

  function generateRandomBinarySequence(length) {
    let sequence = '';
    for (let i = 0; i < length; i++) {
      sequence += Math.random() < 0.5 ? '0' : '1';
    }
    return sequence;
  }

  function findLongestConsecutiveRun(sequence) {
    let longestRun = '';
    let currentRun = '';
  
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] === currentRun[currentRun.length - 1]) {
        currentRun += sequence[i];
      } else {
        currentRun = sequence[i];
      }
  
      if (currentRun.length > longestRun.length) {
        longestRun = currentRun;
      }
    }
  
    return longestRun;
  }

  function calculateCrossEntropy(sequence1, sequence2) {
    // Ensure sequences have the same length
    if (sequence1.length !== sequence2.length) {
      throw new Error('Sequences must have the same length for cross-entropy calculation');
    }
  
    const totalLength = sequence1.length;
  
    // Calculate probabilities for both sequences
    const p0_seq1 = sequence1.split('').filter(bit => bit === '0').length / totalLength;
    const p1_seq1 = sequence1.split('').filter(bit => bit === '1').length / totalLength;
    const p0_seq2 = sequence2.split('').filter(bit => bit === '0').length / totalLength;
    const p1_seq2 = sequence2.split('').filter(bit => bit === '1').length / totalLength;
  
    // Calculate cross-entropy
    const crossEntropy = -((p0_seq1 * Math.log2(p0_seq2)) + (p1_seq1 * Math.log2(p1_seq2)));
    return crossEntropy;
  }

  function isEntropyBelowThreshold(sequence, threshold) {
    const entropy = calculateEntropy(sequence);
    return entropy < threshold;
  }

  function findExtremeEntropySequence(sequences, extremeType = 'max') {
    if (!Array.isArray(sequences) || sequences.length === 0) {
      throw new Error('Input should be a non-empty array of binary sequences.');
    }
  
    if (extremeType !== 'max' && extremeType !== 'min') {
      throw new Error('extremeType should be "max" or "min".');
    }
  
    let extremeEntropy = extremeType === 'max' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
    let extremeSequence = null;
  
    for (const sequence of sequences) {
      const entropy = calculateEntropy(sequence);
  
      if ((extremeType === 'max' && entropy > extremeEntropy) || 
          (extremeType === 'min' && entropy < extremeEntropy)) {
        extremeEntropy = entropy;
        extremeSequence = sequence;
      }
    }
  
    return extremeSequence;
  }
  
  

  module.exports = {
    calculateEntropy:calculateEntropy,
    calculateInformationGain:calculateInformationGain,
    generateRandomBinarySequence:generateRandomBinarySequence,
    findLongestConsecutiveRun:findLongestConsecutiveRun,
    calculateCrossEntropy:calculateCrossEntropy,
    isEntropyBelowThreshold:isEntropyBelowThreshold,
    findExtremeEntropySequence:findExtremeEntropySequence
  }