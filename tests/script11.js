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
  

