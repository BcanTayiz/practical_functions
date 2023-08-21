const math = require('mathjs');

// Generate an array of n random numbers from a uniform distribution between a and b.
function generateUniformDistribution(n, a, b) {
  const randomNumbers = math.random([n]);
  const range = b - a;
  const uniformNumbers = randomNumbers.map((x) => a + x * range);
  return uniformNumbers.valueOf();
}

// Generate an array of n random numbers from a normal (Gaussian) distribution with mean mu and standard deviation sigma.
function generateNormalDistribution(n, mu, sigma) {
  const randomNumbers = math.random([n]);
  const normalNumbers = randomNumbers.map((x) => math.sqrt(-2 * math.log(x)) * math.cos(2 * Math.PI * math.random()));
  const scaledNumbers = normalNumbers.map((x) => mu + sigma * x);
  return scaledNumbers.valueOf();
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

// Example usage with custom parameters:
const n = 1000;

const customUniformNumbers = generateUniformDistribution(n, 5, 15); // Between 5 and 15
const customNormalNumbers = generateNormalDistribution(n, 10, 2); // Mean = 10, Std Deviation = 2
const customExponentialNumbers = generateExponentialDistribution(n, 0.7); // Lambda = 0.7
const customPoissonNumbers = generatePoissonDistribution(n, 3); // Lambda = 3
const customBinomialNumbers = generateBinomialDistribution(n, 0.3); // n = 10, p = 0.3
const customGeometricNumbers = generateGeometricDistribution(n, 0.1); // p = 0.1


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