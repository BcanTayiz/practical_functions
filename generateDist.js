const math = require('mathjs');

// Generate an array of n random numbers from a uniform distribution between 0 and 1.
function generateUniformDistribution(n) {
  const randomNumbers = math.random([n]);
  return randomNumbers.valueOf();
}

// Generate an array of n random numbers from a normal (Gaussian) distribution with mean 0 and standard deviation 1.
function generateNormalDistribution(n) {
  const randomNumbers = math.random([n]);
  const normalNumbers = randomNumbers.map((x) => math.sqrt(-2 * math.log(x)) * math.cos(2 * Math.PI * math.random()));
  return normalNumbers.valueOf();
}

// Generate an array of n random numbers from an exponential distribution with rate parameter lambda.
function generateExponentialDistribution(n, lambda) {
  const randomNumbers = math.random([n]);
  const exponentialNumbers = randomNumbers.map((x) => -1 / lambda * math.log(1 - x));
  return exponentialNumbers.valueOf();
}

// Generate an array of n random numbers from a Poisson distribution with rate parameter lambda.
function generatePoissonDistribution(n, lambda) {
  const poissonNumbers = [];
  for (let i = 0; i < n; i++) {
    let L = Math.exp(-lambda);
    let k = 0;
    let p = 1;
    do {
      k++;
      p *= Math.random();
    } while (p > L);
    poissonNumbers.push(k - 1);
  }
  return poissonNumbers;
}

// Generate an array of n random numbers from a binomial distribution with parameters n (number of trials) and p (probability of success).
function generateBinomialDistribution(n, p) {
  const binomialNumbers = [];
  for (let i = 0; i < n; i++) {
    let x = 0;
    for (let j = 0; j < n; j++) {
      if (Math.random() < p) {
        x++;
      }
    }
    binomialNumbers.push(x);
  }
  return binomialNumbers;
}

// Generate an array of n random numbers from a geometric distribution with parameter p (probability of success).
function generateGeometricDistribution(n, p) {
  const geometricNumbers = [];
  for (let i = 0; i < n; i++) {
    let x = 0;
    while (Math.random() > p) {
      x++;
    }
    geometricNumbers.push(x);
  }
  return geometricNumbers;
}

// Calculate the mean of an array of numbers.
function calculateMean(numbers) {
  return math.mean(numbers);
}

// Calculate the standard deviation of an array of numbers.
function calculateStandardDeviation(numbers) {
  return math.std(numbers);
}


module.exports = {
    generateUniformDistribution:generateUniformDistribution,
    generateNormalDistribution:generateNormalDistribution,
    generateExponentialDistribution:generateExponentialDistribution,
    generatePoissonDistribution:generatePoissonDistribution,
    generateBinomialDistribution:generateBinomialDistribution,
    generateGeometricDistribution:generateGeometricDistribution,
    calculateMean:calculateMean,
    calculateStandardDeviation:calculateStandardDeviation,
}