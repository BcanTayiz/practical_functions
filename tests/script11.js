const pf = require('practical-functions')


console.log(pf.toFixedNum(10.123123,3))

// Example usage:
pf.customConsoleLog("This is a custom log message with colorful file and line information.");
// Result such that ==> [script11-line:7]  This is a custom log message with colorful file and line information.
pf.customConsoleLog({a:1,b:2,c:3})
// Result such that ==> [script11-line:9]  { a: 1, b: 2, c: 3 } with colors

  

