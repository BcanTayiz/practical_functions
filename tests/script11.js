const pf = require('practical-functions')


console.log(pf.toFixedNum(10.123123,3))

// Example usage:
pf.customConsoleLog("This is a custom log message with colorful file and line information.");
// Result such that ==> [script11-line:7]  This is a custom log message with colorful file and line information.
pf.customConsoleLog({a:1,b:2,c:3})
// Result such that ==> [script11-line:9]  { a: 1, b: 2, c: 3 } with colors

// Example usage:
const data = [2, 3, 5, 6, 8, 10, 11, 12, 14, 16];
const n = 5;
const reducedData = pf.signalReducer(data, n);

pf.customConsoleLog(reducedData); // An array of 'n' summarized values

const data2 = pf.generateExponentialDistribution(100,0.2)
console.log(data2)
const n2 = 10
const reducedData2 = pf.signalReducer(data2,n2)

pf.customConsoleLog(reducedData2)

const data3 = pf.generateBinomialDistribution(100,0.2)
console.log(data3)
const n3 = 10
const reducedData3 = pf.signalReducer(data3,n3)

pf.customConsoleLog(reducedData3)

// Example usage:
const data4 = [2.5, 3.3, 5.1, 6.7, 8.9, 10.2, 11.8, 12.6, 14.3, 16.7];
const m = 5; // Local segment size
const alpha = 0.2; // Smoothing parameter
const reducedData4 = pf.loessReducer(data4, m, alpha);

pf.customConsoleLog(reducedData4)

const value = pf.smoothAndRemoveNoise(reducedData4,0.5,2)
pf.customConsoleLog(value); // An array of dimensionality-reduced values

// Example usage:
const result = pf.parseFormula('2 * (3 + 4) - 1^2');
console.log(result); // Output: 13


const resultWithoutEval = pf.parseFormula('2 * (3 + 4)^(1/10)');
console.log(resultWithoutEval); // Output: 2.423
  

