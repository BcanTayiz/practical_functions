﻿<p align="center">
  <h1>Practical Functions</h1>
</p>

---
<div align="center">
    <img src="../package/logo/logo.png" alt="Logo" width="500" heigth="300"/>
</div>




---
> Code is simple. You can analyze code [what it does here](https://github.com/BcanTayiz/practical_functions) 
> There are lots of different functions to make it easier javascript coding experience.
> There are many provided function in scope of:
> **Math,Array Manuplation,Array Creation, Object Manuplation,Statistics, Matrix Calculation
> Random Number Generation, Random List Generation and more**

---

## Usability

* If you ever stack and get lazier at some point,
* When you try something and bugged at some problem,
* While you want to focus something besides functionality,
* This project supports you while you can consider other problems,
---

![Travis Status](https://img.shields.io/travis/:BcanTayiz/:practical_functions)
![NPM Downloads](https://img.shields.io/npm/dw/:practical_functions)
![NPM License](https://img.shields.io/npm/l/:practical_functions)
[![Twitter](https://img.shields.io/twitter/follow/:iz_apps.svg?style=social&label=@:iz_apps)](https://twitter.com/:iz_apps)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-orange?style=for-the-badge&logo=ko-fi)](https://www.buymeacoffee.com/codermakerv)

---
# Usage of Functions



```js live=true
const pf = require('practical-functions')

let list = [1,2,3,4,5,6]
let object = {'a':1,'b':2,'c':3}
const objectsList = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob' ,age:2},
    {name: 'mikael',age:15}
];

const originalObject = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming'],
    address: {
        city: 'New York',
        country: 'USA'
    }
};

console.log(pf.checkValue(list,[4,5]))
console.log(pf.modulerCheck(list,[1,2,3]))
console.log(pf.deleteValues(list,[1,2,3]))
console.log(pf.deleteValues(object,['a','b']))

console.log(pf.validateEmail('asdasd@index.com'),'EMAİL VALIDATE')
console.log(pf.validateEmail('asdasd@gmail.com'),'EMAİL VALIDATE')
console.log(pf.validateEmail('asdasd@.com'),'EMAİL VALIDATE')
console.log(pf.validateEmail('asdasd@yandex.com'),'EMAİL VALIDATE')


console.log(pf.createRandomUuid4())
console.log(pf.objectSort(objectsList,'age'))
console.log(pf.hasKeyInObjectsList(objectsList,'name'))

console.log(pf.valueEmpty('0'))
console.log(pf.valueEmpty([]))
console.log(pf.deepClone(originalObject))

console.log(pf.checkValue(originalObject,'John'))
console.log(pf.transformBoolean('true'))

const currentDate = new Date();
console.log(pf.dateToString(currentDate, 'tr-TR', 'day-month-year', '/'));
console.log(pf.dateToString(currentDate, 'tr-TR', 'month-year', '-'));
console.log(pf.dateToString(currentDate, 'tr-TR', 'month-day', '.'));

const originalString = 'This is an example string that we want to split into multiple lines based on word count.';
const wordCount = 5;
const multiLineHTML = pf.convertToMultilineHTML(originalString, wordCount);
console.log(multiLineHTML)

const jsonData = {
    name: 'John',
                                            age: 30,
                        city: 'New York',
    great:{
        values:[1,2,3,4,      5,2,3,],mean:{'a':4,'b':5}
    }
};
console.log(pf.prettifierJson(jsonData))


console.log(pf.checkArray({'a':1,'b':2,'c':3}))

const objList = [
    { key1: 'value1', key2: 'value2' },
    { key3: 'value3', key4: 'value4' }
];

console.log(pf.mergeObjects(objList))
console.log(pf.objectLength(pf.mergeObjects(objList)))

async function main() {
    try {
        const result = await pf.fileToArray(['text.txt', 'text2.txt']);
        console.log(result);
    } catch (error) {
        console.error('Hata:', error);
    }
}

main();

var d1 = new Date();
var d2 = new Date(d1);

console.log(pf.checkDates(d1,d2),'CHECK DATES')

// usage example:
var a = ['a', 1, 'a', 2, '1'];
console.log(pf.filterUnique(a,true,false))
console.log(pf.filterUnique(a,false,false))
console.log(pf.filterUnique(a,true,true))
console.log(pf.filterUnique(a,false,true))


console.log(pf.multipleConditions([1,2,3,4,5],[1,2,3,4,5]),'MULTIPLE CONDITIONS')

console.log(pf.numberWithCommas(10000000000),'NUMBER WITH COMMAS')



console.log(pf.isNumeric(100.23123),'IS NUMERIC?')
console.log(pf.isNumeric('1000.1239239'),'IS NUMERIC?')
console.log(pf.isNumeric('10230.sasdasd'),'IS NUMERIC?')


console.log(pf.randomRange(20,30),'RANDOM RANGE')
console.log(pf.randomRange(20,30,3),'RANDOM RANGE')
console.log(pf.randomRange(20,30,5),'RANDOM RANGE')

console.log(pf.isNumeric(100.23123,true),'IS NUMERIC?')
console.log(pf.isNumeric('1000.1239239',true),'IS NUMERIC?')
console.log(pf.isNumeric('10230.sasdasd',true),'IS NUMERIC?')

console.log(pf.getNumbers(2,10,3),'GET NUMBERS')
console.log(pf.getNumbers(10,1,-3),'GET NUMBERS')

var d1 = new Date();
console.log(pf.isValidDate(d1),'VAL DATE')
console.log(pf.isValidDate('10.1.2020'),'VAL DATE')
console.log(pf.isValidDate('10-20-300'),'VAL DATE')


console.log(pf.shuffleArrayRandom([1,2,4,123,4,5,2,100]),'SHUFFLE ARRAY')

console.log(pf.createObjectFromLists([1,2,3,4,5,6],[1,2,3]),'OBJECT FROM LISTS')
console.log(pf.createObjectFromLists([1,2],[1,2,3]),'OBJECT FROM LISTS')

let objValue = {'a':1,'b':2,'c':3}
console.log(pf.alterObjectValues(objValue,'sum',4),'ALTER OBJECT VALUES')
console.log(pf.alterObjectValues(objValue,'multiply',4),'ALTER OBJECT VALUES')
console.log(pf.alterObjectValues(objValue,'divide',4),'ALTER OBJECT VALUES')
console.log(pf.alterObjectValues(objValue,'substract',4),'ALTER OBJECT VALUES')

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(pf.listReducer(array,'sum'),'listReducer VALUES')
console.log(pf.listReducer(array,'multiply'),'listReducer VALUES')
console.log(pf.listReducer(array,'divide'),'listReducer VALUES')
console.log(pf.listReducer(array,'substract'),'listReducer VALUES')

const lol = () => {
    console.log('ha')
}

console.log(pf.getType('a'))
console.log(pf.getType(123))
console.log(pf.getType(lol))
console.log(pf.getType(array))


const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomItems = pf.getRandomItemsFromArray(originalArray, 3);
console.log(randomItems);


var hello = "Hello World";
console.log(pf.replaceAt(hello,2,'!!'))


console.log(pf.swapArrayElements(originalArray,2,4),'SWAP ELEMENTS')
console.log(pf.swapArrayElements(originalArray,0,9),'SWAP ELEMENTS')

console.log(pf.compareLists([1,2,3,4],[1,2,3]))


console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'max',1),'RETURN MAX MIN')
console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'min',1),'RETURN MAX MIN')
console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'max',3),'RETURN MAX MIN')
console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'min',3),'RETURN MAX MIN')

const duplicateKeyObj = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 3, name: 'Jeff' },
    {id:5,name:'Charles'},
    {id:6,name:'Charlie'}

];

console.log(pf.removeDuplicatesByKey(duplicateKeyObj,'name'),'DUPLICATE KEY')
console.log(pf.removeDuplicatesByKey(duplicateKeyObj,'id'),'DUPLICATE KEY')


// Example equation: a^2 + b^2 == c^2
function pythagoreanEquation(a, b, c) {
    return a * a + b * b === c * c;
}

function anotherEquation(a,b,c,d,e,f){
    return a+b*2+(c+d)*e+(a*b) === f*2
}

const conditionFunction = pythagoreanEquation; // Replace with your condition function
const inputArgs = [3, 4, 5, 6, 8, 10]; // Replace with your input values array
const numVariables = 3; // Replace with the desired number of variables (3 or 4)

const result = pf.findMatchingCombinations(conditionFunction, inputArgs, numVariables);
console.log(`Matching ${numVariables}-variable combinations:`, result);

const cond2 = anotherEquation; // Replace with your condition function
const args = pf.getNumbers(1,20); // Replace with your input values array
const varNums = 5; // Replace with the desired number of variables (3 or 4)

const result2 = pf.findMatchingCombinations(cond2, args, varNums);
console.log(`Matching ${varNums}-variable combinations:`, result2);

const operation = "divide"; // Change this to "sum", "multiply", "factorial", "fibonacci", "subtract", "divide", etc.
const numbers = [10, 2, 2]; // Provide numbers as an array

const recursiveResult = pf.recursiveMathOperation(operation, ...numbers);
console.log(`Result of ${operation}(${numbers.join(", ")}): ${recursiveResult}`);

const nums = [1, 3, 4, 2, 2,3,1,10,10,123,32,72]; // Replace with your input array
const duplicate = pf.findDuplicate(nums);
console.log("Duplicate element:", duplicate);


const dublicateNums = [4, 3, 2, 7, 8, 2, 1, 4]; // Replace with your input array
const duplicateElements = pf.findDuplicateElements(dublicateNums);
console.log("Duplicate elements:", duplicateElements);

const testCases = ["racecar", "Hello", 12321, "A man, a plan, a canal, Panama!"]; // Add more test cases as needed

for (const testCase of testCases) {
    const result = pf.isPalindrome(testCase);
    console.log(`"${testCase}" is a palindrome: ${result}`);
}


const inputArray = pf.shuffleArrayRandom(pf.getNumbers(1,10000)); // Replace with your array of a million integers
const chunkSize = 1000; // Adjust the chunk size as needed

const sortedArray = pf.externalMergeSort(inputArray, chunkSize);
console.log(sortedArray);


const inputList = [9, 4, 6, 2, 7, 4, 3, 9, 1, 15, 10, 12, 8, 17, 14, 13, 9, 1]; // Replace with user's input list
const pivots = [4, 10]; // Add pivot values

const nPartResult = pf.nPartitions(inputList, pivots);
console.log(nPartResult);

const k = 60; // Replace with the desired value of k
const regularNumbers = pf.generateRegularNumbers(k);
console.log("First", k, "regular numbers:", regularNumbers)

const stockPrices = pf.shuffleArrayRandom(pf.getNumbers(1,1000))
const stockResult = pf.maxProfit(stockPrices);
console.log("Maximum profit:", stockResult); // Output: 5

const detialedPrices = pf.shuffleArrayRandom(pf.getNumbers(1,10000))
const detailedResult = pf.maxProfitDetails(detialedPrices);

const summary = pf.summarizeDecisions(detailedResult);
console.log(summary)

const stringArray = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const searchTerm = "an";
const mode = "includes";

try {
    const filteredStrings = pf.filterStringsByTerm(stringArray, searchTerm, mode);
    console.log("Filtered strings:", filteredStrings);
} catch (error) {
    console.error("Error:", error.message);
}

```

# Examples 2


```js live=true
// Example usage
var desiredLength = 20;
var piValue = pf.calculatePi(desiredLength);
console.log(piValue);


// Example usage for an octagon (8-gon) with width 10
var shapeIdentifier = 8;
var width = 10;
var area = pf.calculateArea(shapeIdentifier, width);
console.log("Area:", area);


// Example usage for length = 10
var length = 30;
var eulerValue = pf.calculateEulerNum(length);
console.log("Euler's number with", length, "decimal places:", eulerValue);


var side1 = 5;
var side2 = 7;
var angleInDegrees = 45;
var triangleArea = pf.calculateTriFieldAngle(side1, side2, angleInDegrees);
console.log("Triangle Area:", triangleArea);

let num = 123.2301492300000
console.log(pf.removeZeros(num))

let logNum = 123
console.log(pf.logBase(123,2))

// Example usage with target color [255, 0, 0] (red)
const targetColor = [255, 0, 0];
const cssFilter = pf.getRecolorFilter(targetColor);
console.log("CSS Filter:", cssFilter);

const numRound = 1234923
console.log(pf.roundX(numRound,3))
console.log(pf.roundX(numRound,5))
console.log(pf.roundX(numRound,7))

console.log(pf.customPad(pf.randomRange(1,100),10))
console.log(pf.customPad(pf.randomRange(1,100),3))
console.log(pf.customPad(pf.randomRange(1,100),14))
console.log(pf.customPad((pf.randomRange(1,100),20)))

console.log(pf.toDegrees(pf.randomRange(1,100)))
console.log(pf.toRadians(pf.randomRange(1,100)))

var number1 = 4.954848;
var number2 = 5.9797;

console.log(pf.makePercentage(number1,number2))

console.log( "1+2+3", '=' , pf.parseFormula("1+2+3"));
console.log( "1 + 2 * 3", '=' , pf.parseFormula("1 + 2 * 3"));

// Example usage with an array
const inputArray = [10, 5, 2, 8, 15];
const lowerThreshold = 4;
const upperThreshold = 12;

const modifiedArray = pf.modifyValues(inputArray, lowerThreshold, upperThreshold);
console.log("Modified Array:", modifiedArray);

// Example usage with an object
const inputObject = { a: 10, b: 5, c: 2, d: 8, e: 15 };
const modifiedObject = pf.modifyValues(inputObject, lowerThreshold, upperThreshold);
console.log("Modified Object:", modifiedObject);

// Example usage
const digitNumber = 12345;
const digits = pf.getIndividualDigits(digitNumber);
console.log("Individual Digits:", digits);

// Example usage
const values = ['2.3', '2.4', '3.1'];
const decimalPlaces = 2;

const result = pf.sumAndFixDecimal(values, decimalPlaces);
console.log("Sum with fixed decimal places:", result);

// Example usage
const numberList = [12, 18, 24];
const gcdResult = pf.gcd(numberList);
console.log("GCD of the list:", gcdResult);

// Example usage
const circleRadius = 5;
const numberOfPoints = 10;
const randomPoints = pf.genRandPointCircle(circleRadius, numberOfPoints);
console.log("Random Points within Circle:", randomPoints);


console.log(pf.getDateOfWeek(3,2023))

const colorList = ["#FF0000", "rgba(0, 0, 255, 0.5)", "#00FF00"]; // Red, semi-transparent blue, green
const midpointColor = pf.getMixColor(colorList);
console.log("Midpoint Color:", midpointColor);

// Example usage
const datasets = [
    [0, 4, 5, 3, 2, 5, 6],
    [33, 26, 54, 23, 86, 23],
    [98, 253, 87, 876, 263]
];

for (const dataset of datasets) {
    const maxValue = Math.max(...dataset);
    const yScaleMax = pf.calculateYScaleMax(maxValue);
    console.log("Max Value:", maxValue, "Y-Scale Max:", yScaleMax);
}


// Example usage
const rectangleCount = 5;
const maxCanvasWidth = 500;
const maxCanvasHeight = 500;

const rectangles = pf.genNonOverLapRect(rectangleCount, maxCanvasWidth, maxCanvasHeight);
console.log("Generated Rectangles:", rectangles,rectangles.length);

// Example usage
const numberToDivide = 20;
const numberOfParts = 4;

const dividedParts = pf.divEqParts(numberToDivide, numberOfParts);
console.log("Divided Parts:", dividedParts);

// Example usage
const numberToDivide2 = 123123;
const numberOfParts2 = 23;

const dividedParts2 = pf.divEqParts(numberToDivide2, numberOfParts2);
console.log("Divided Parts:", dividedParts2);


// Example usage
const originalList = [2, 5, 10, 7, 3];
const minRange = 0;
const maxRange = 1;
const normalizedValues = pf.normalizeList(originalList, minRange, maxRange);
console.log("Normalized Values:", normalizedValues);

// Example usage
const numberNdividorsList = [6, 8, 9, 12, 16, 18, 25, 36,123,100,14,15];
const N = 4;

const matchingNumbers = pf.findNDividers(numberNdividorsList, N);
console.log("Numbers with", N, "divisors:", matchingNumbers);


// Example usage
const originalValue = 2048; // 2048 bits
let startUnit = 'bit'
let unitConvert = 'kilobyte'
const convertedValue = pf.convertMemory(originalValue, startUnit, unitConvert);
console.log(convertedValue + ' ' + unitConvert);

const originalValue2 = 1000; // 2048 bits
let startUnit2 = 'byte'
let unitConvert2 = 'gigabyte'
const convertedValue2 = pf.convertMemory(originalValue, startUnit2, unitConvert2);
console.log(convertedValue2 + ' ' + unitConvert2);

// Example usage
const numberArray = [12, 18, 24];
const lcm = pf.findLCMOfArray(numberArray);
console.log("LCM of", numberArray, "is", lcm);
```

## Example 3

```js live=true
// Define the root directory to start searching from
const rootDirectory = __dirname;

// Define the file extension to change from and to
const fromExtension = '.new';
const toExtension = '.txt';

// Start the process from the root directory
pf.changeFileExtension(rootDirectory,fromExtension,toExtension);

console.log('File extensions changed successfully!');

// Example usage
const originalString = 'This is a test string for compression.';
const compressedString = pf.customCompress(originalString);
const decompressedString = pf.customDecompress(compressedString);

console.log('Original:', originalString);
console.log('Compressed:', compressedString);
console.log('Decompressed:', decompressedString);


// Example usage
const originalString2 = pf.generateRandomString(500)
const compressedString2 = pf.customCompress(originalString);
const decompressedString2 = pf.customDecompress(compressedString);

console.log('Original:', originalString2);
console.log('Compressed:', compressedString2);
console.log('Decompressed:', decompressedString2);

// Example usage:
const sequence = "101001001";
const entropy = pf.calculateEntropy(sequence);
console.log(`Entropy of "${sequence}": ${entropy}`);

const sequence2 = pf.generateRandomString(100)
const entropy2 = pf.calculateEntropy(sequence2);
console.log(`Entropy of "${sequence2}": ${entropy2}`);


// Example usage:
const array1 = [1, 2, 3];
const array2 = [1, 2, 3, 4, 5];

const multiplicationResult = pf.performArrayOperation(array1, array2, "multiply");
console.log("Multiplication Result:", multiplicationResult);

const additionResult =  pf.performArrayOperation(array1, array2, "add");
console.log("Addition Result:", additionResult);

const subtractionResult =  pf.performArrayOperation(array1, array2, "subtract");
console.log("Subtraction Result:", subtractionResult);

const divisionResult =  pf.performArrayOperation(array1, array2, "divide");
console.log("Division Result:", divisionResult);


// Example usage:
const polygonVertices = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 3 },
    { x: 0, y: 3 }
];

const area = pf.polygonArea(polygonVertices);
console.log("Polygon Area:", area);

// Example usage:
const coefficients = [1, -3, 2]; // Represents the polynomial x^2 - 3x + 2 = 0
const initialGuess = 2;
const root = pf.findRoot(coefficients, initialGuess);

console.log(`Root found at x = ${root}`);


```

# Example 4 

```js live=true
// Example usage:
const yTrue = [3, 4, 5, 6, 7];
const yPred = [2.8, 4.2, 5.1, 6.5, 7.2];

console.log("MSE:", pf.meanSquaredError(yTrue, yPred));
console.log("RMSE:", pf.rootMeanSquaredError(yTrue, yPred));
console.log("RSE:", pf.relativeSquaredError(yTrue, yPred));
console.log("MAE:", pf.meanAbsoluteError(yTrue, yPred));
console.log("MAPE:", pf.meanAbsolutePercentageError(yTrue, yPred));
console.log("MPE:", pf.meanPercentageError(yTrue, yPred));
console.log("MBD:", pf.meanBiasDeviation(yTrue, yPred));
console.log("R-squared:", pf.coefficientOfDetermination(yTrue, yPred));


// Example usage:
const oneDArray = [1, 2, 3, 4, 5, 6];
const numRows = 2;
const numCols = 3;

const matrix = pf.createMatrixFromArray(oneDArray, numRows, numCols);
console.log(matrix);

let corMatResult = pf.calculateCorrelationMatrix(matrix)
console.log('Correlation Matrix:');
console.log(corMatResult);

let corList = pf.createRandomList(25,1,10000)

const numRows2 = 5;
const numCols2 = 5;

const matrix2 = pf.createMatrixFromArray(corList, numRows2, numCols2);
console.log(matrix2);

let corMatResult2 = pf.calculateCorrelationMatrix(matrix2)
console.log('Correlation Matrix:');
pf.prettyPrintMatrix(corMatResult2)


//Example usage of the createTableFromMatrix function
// const tableElement = pf.createTableFromMatrix(matrix2);
//console.log(tableElement)

// Example matrices
const matrixA = [
    [1, 2],
    [3, 4],
];

const matrixB = [
    [5, 6],
    [7, 8],
];

console.log('Matrix A:');
console.log(matrixA);

console.log('Matrix B:');
console.log(matrixB);

// Matrix addition
const sumMatrix = pf.addMatrices(matrixA, matrixB);
console.log('Matrix A + Matrix B:');
pf.prettyPrintMatrix(sumMatrix)

// Matrix subtraction
const diffMatrix = pf.subtractMatrices(matrixA, matrixB);
console.log('Matrix A - Matrix B:');
pf.prettyPrintMatrix(diffMatrix)

// Matrix multiplication
const productMatrix = pf.multiplyMatrices(matrixA, matrixB);
console.log('Matrix A * Matrix B:');
pf.prettyPrintMatrix(productMatrix)

// Matrix transposition
const transposedMatrix = pf.transposeMatrix(matrixA);
console.log('Transpose of Matrix A:');
pf.prettyPrintMatrix(transposedMatrix)

// Example usage:
const predictedLabels = [1, 0, 1, 1, 0, 0, 1];
const actualLabels = [1, 0, 0, 1, 1, 0, 1];

const result = pf.confusionMatrix(predictedLabels, actualLabels);
console.log('Confusion Matrix:');
console.log(result);

// Test generating a list of random users
const randomUserList = pf.genRanUserList(5);
console.log('Random User List:');
console.log(randomUserList);

// Test generating a list of random products
const randomProductList = pf.genRandProductList(3);
console.log('Random Product List:');
console.log(randomProductList);

// Test generating a list of random emails
const randomEmailList = pf.genRandEmailList(4);
console.log('Random Email List:');
console.log(randomEmailList);

// Test generating a list of random orders
const randomOrderList = pf.genRandomOrder(2);
console.log('Random Order List:');
console.log(randomOrderList);

// Test generating a list of random events
const randomEventList = pf.genRandomEvent(3);
console.log('Random Event List:');
console.log(randomEventList);

// Test generating a list of random user objects
const randomUserObjList = pf.genRandUserObjList(5);
console.log('Random User Object List:');
console.log(randomUserObjList);

// Test generating a list of random event objects
const randomEventObjList = pf.genRandEventObjList(3);
console.log('Random Event Object List:');
console.log(randomEventObjList);

// Test generating a list of random date objects
const randomDateObjList = pf.genRandDateObjList(4);
console.log('Random Date Object List:');
console.log(randomDateObjList);

// Test generating a list of random email objects
const randomEmailObjList = pf.genRandEmailObjList(2);
console.log('Random Email Object List:');
console.log(randomEmailObjList)

// Example usage:
const baseText = 'This is the text to compare.';
const textDocument = 'Here is a sample text. This is a comparison text. The text to compare is important.';
const mostSimilarText = pf.findMostSimilarText(baseText, textDocument);

console.log('Most Similar Text:');
console.log(mostSimilarText);

// Example usage:
const baseText2 = 'This is the text to compare.';
const textDocument2 = `
    This is the first paragraph.
    This is the second paragraph with some differences.
    This is the third paragraph. The text to compare is important.
`;

const nSentencesBefore = 0;
const nSentencesAfter = 4;

const result2 = pf.findMostSimDetailed(baseText2, textDocument2, nSentencesBefore, nSentencesAfter);

console.log('Most Similar Text with Context:');
console.log(result2);


```

# Example 5

```js live=true

const informalSentences = [
    "Hey, can you give me a hand with this?",
    "I wanna go to the movies tonight.",
    "What's up? Got any plans for the weekend?",
    "Let's grab some lunch!",
    "It's gonna be awesome!",
    "I gotta finish this report by tomorrow.",
    "Can't make it to the meeting, sorry.",
    "I'll hit you up later."
];

const formalSentences = [
    "Hello, could you please assist me with this?",
    "I would like to attend the cinema this evening.",
    "How are you? Do you have any plans for the upcoming weekend?",
    "Would you like to join me for a midday meal?",
    "It will be quite impressive.",
    "I must complete this report by tomorrow.",
    "I regret to inform you that I won't be able to attend the meeting.",
    "I will contact you later."
];

// Example usage:
for (let i = 0; i < informalSentences.length; i++) {
    console.log("Informal: " + pf.detectNaiveInformality(informalSentences[i]))
    console.log("Formal: " + pf.detectNaiveInformality(formalSentences[i]))
    console.log("\n");
}

// Test cases, works better
console.log(pf.detectNaiveInformality("I am writing to express my sincere gratitude."));
console.log(pf.detectNaiveInformality("Hello, how are you today?"));
console.log(pf.detectNaiveInformality("Best regards,"));

console.log(pf.detectNaiveInformality("Hey, what's up?"));
console.log(pf.detectNaiveInformality("I wanna go to the movies tonight."));
console.log(pf.detectNaiveInformality("LOL, that's hilarious!"));

// Test case 1: Text contains an informal word
const text1 = "Hey, what's up? Wanna grab some lunch?";
console.log(pf.detectNaiveInformality(text1),'TRUE'); // true

// Test case 2: Text is formal and does not contain informal words
const text2 = "Dear Sir, I am writing to inquire about your services.";
console.log(pf.detectNaiveInformality(text2),'FALSE'); // false

// Test case 3: Text contains an informal word within a longer word
const text3 = "The word 'hell' is often used informally.";
console.log(pf.detectNaiveInformality(text3),'FALSE'); // false

// Test case 4: Text is empty
const text4 = "";
console.log(pf.detectNaiveInformality(text4),'FALSE'); // false

// Test case 5: Text contains multiple informal words
const text5 = "Hi there! What's up? Wanna hang out after work?";
console.log(pf.detectNaiveInformality(text5),'TRUE'); // true

// Test case 6: Text contains formal words only
const text6 = "I respectfully submit my application for your consideration.";
console.log(pf.detectNaiveInformality(text6),'FALSE'); // false

// Test Data: Array of numbers
const testData = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Function 1: Find the sum of all numbers in the array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Function 2: Find the maximum number in the array
function maxArray(arr) {
    return Math.max(...arr);
}

// Function 3: Calculate the average of all numbers in the array
function averageArray(arr) {
    const sum = sumArray(arr);
    return sum / arr.length;
}

const functionsToTest = [sumArray, maxArray, averageArray];

const fastestFunction = pf.findFastFunc(functionsToTest, testData);
console.log('Fastest and robust function:', fastestFunction.name);


let all_list = pf.combineAndFlattenLists([pf.genRanUserList(3),pf.genRandEmailList(3),pf.genRandDateObjList(3),pf.genRandEventObjList(3)])
console.log(all_list)


// Example usage:
const rootFolder = './test-folder';
const outputFolder = './images';
const blockedFolders = ['blocked_folder1', 'blocked_folder2'];

pf.convertImagesInFolder(
    rootFolder,
    outputFolder,
    ['.jpg', '.png', '.webp'], // Add '.webp' to accept WebP format
    800,
    600,
    { width: 300, height: 300 },
    blockedFolders
  );


// Example usage:
const password = 'MyStrongP@ssw0rd';
const strength = pf.checkPasswordStrength(password);
console.log(`Password strength: ${strength}`);

// Example usage: Generate a random password of length 12
const randomPassword = pf.generateRandomPassword(12);
console.log("Random Password:", randomPassword);

// Example usage:
const isPasswordValid = pf.validatePasswordPolicy('My$tr0ngP@ss');
console.log('Password is Valid:', isPasswordValid);

const password2 = 'SecureP@ss12!Ad-123';
const isPasswordValid2= pf.validatePasswordPolicy(password2);
console.log('Password is Valid:', isPasswordValid2);


const folderPath = '.'; // Replace with the actual folder path
const ignoreDirs = ['node_modules', 'other_dir_to_ignore']; // Specify directories to ignore
pf.countLinesInFolder(folderPath, ignoreDirs)
  .then((totalLines) => {
    if (totalLines !== -1) {
      console.log(`Total Lines of Code: ${totalLines}`);
    } else {
      console.log('Error occurred during counting lines.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  const myObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      zip: '10001',
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      }
    },
    hobbies: ['Reading', 'Cooking', 'Traveling'],
    scores: [85, 92, 78],
    isStudent: true,
    additionalInfo: {
      interests: ['Sports', 'Music'],
      rating: 4.5
    }
  };
  
  const objectDetails = pf.getObjectDetails(myObject);
  console.log(objectDetails);

  const lengthInMeters = 5;
const lengthInFeet = pf.convertMeasurement(lengthInMeters, 'meter', 'feet');
console.log(`${lengthInMeters} meters is equal to ${lengthInFeet} feet.`);

const massInKg = 10;
const massInPounds = pf.convertMeasurement(massInKg, 'kg', 'pound');
console.log(`${massInKg} kilograms is equal to ${massInPounds} pounds.`);

const temperatureInCelsius = 25;
const temperatureInFahrenheit = pf.convertMeasurement(temperatureInCelsius, 'celsius', 'fahrenheit');
console.log(`${temperatureInCelsius} degrees Celsius is equal to ${temperatureInFahrenheit} degrees Fahrenheit.`);

// Add more examples for other measurement types as needed.

// Example usage with custom parameters:
const nNumber = 1000;

const customUniformNumbers = pf.generateUniformDistribution(nNumber, 5, 15); // Between 5 and 15
const customNormalNumbers = pf.generateNormalDistribution(nNumber, 10, 2); // Mean = 10, Std Deviation = 2
const customExponentialNumbers = pf.generateExponentialDistribution(nNumber, 0.7); // Lambda = 0.7
const customPoissonNumbers = pf.generatePoissonDistribution(nNumber, 3); // Lambda = 3
const customBinomialNumbers = pf.generateBinomialDistribution(nNumber, 0.3); // n = 10, p = 0.3
const customGeometricNumbers = pf.generateGeometricDistribution(nNumber, 0.1); // p = 0.1

console.log(customUniformNumbers,'Uniform')
console.log(customNormalNumbers,'Normal')
console.log(customExponentialNumbers,'Exponential')
console.log(customPoissonNumbers,'Poisson')
console.log(customBinomialNumbers,'Uniform')
console.log(customGeometricNumbers,'Geometric')


const spendingCategories = ['food', 'rent'];
const earningCategories = ['salary', 'freelance'];

const financialData = {
  food: [200, 150, 180],
  rent: [1200, 1200, 1200],
  salary: [3000, 3000, 3000],
  freelance: [1000, 1200, 800],
};

const summaryObject = pf.calculateFinancialSummary(spendingCategories, earningCategories, financialData, 'object');
console.log(summaryObject);

const summaryTable = pf.calculateFinancialSummary(spendingCategories, earningCategories, financialData, 'table');
console.log(summaryTable);

```

# Example 6

```js live=true

console.log(pf.isPrime(17)); // Output: true
console.log(pf.isPrime(15)); // Output: false

const primesInRange = pf.generatePrimesInRange(10, 50);
console.log(primesInRange); // Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]


console.log(pf.nthPrime(5)); // Output: 11 (the 5th prime number)
console.log(pf.nthPrime(10)); // Output: 29 (the 10th prime number)

console.log(pf.countPrimesInRange(10, 50)); // Output: 11 (there are 11 primes between 10 and 50)

const twinPrimesInRange = pf.generateTwinPrimesInRange(10, 50);
console.log(twinPrimesInRange); // Output: [[11, 13], [17, 19], [29, 31], [41, 43]]

console.log(pf.primeFactorization(24)); // Output: [2, 2, 2, 3] (the prime factors of 24)

const primesUpTo50 = pf.sieveOfEratosthenes(50);
console.log(primesUpTo50); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

const myArray = [1, 2, 3, 4, 5];

pf.rotateArray(myArray, 2, 'right');
console.log(myArray); // Output: [4, 5, 1, 2, 3]

pf.rotateArray(myArray, 2, 'left');
console.log(myArray); // Output: [1, 2, 3, 4, 5]

const spendingCategories = ['food', 'rent', 'utilities'];
const earningCategories = ['salary'];

const financialData = {
  food: [200, 150, 180],
  rent: [1200, 1200, 1200],
  utilities: [100, 120, 90],
  salary: [3000, 3000, 3000],
};

const savingsPercentage = pf.calculateSavingsPercentage(spendingCategories, earningCategories, financialData);
console.log(`Savings Percentage: ${savingsPercentage.toFixed(2)}%`);

const mostExpensiveCategory = pf.findMostExpensiveCategory(spendingCategories, financialData);
console.log(`The most expensive spending category is: ${mostExpensiveCategory}`);

const monthlyAverageEarnings = pf.calculateMonthlyAverageEarnings(earningCategories, financialData);
console.log(`Monthly Average Earnings: $${monthlyAverageEarnings.toFixed(2)}`);

const profitOrLoss = pf.determineProfitOrLoss(spendingCategories, earningCategories, financialData);
console.log(`Financial Status: ${profitOrLoss}`);

const monthlyCashFlow = pf.calculateMonthlyCashFlow(spendingCategories, earningCategories, financialData);
console.log('Monthly Cash Flow:');
monthlyCashFlow.forEach((month, index) => {
  console.log(`Month ${index + 1}: Net Income - $${month.netIncome.toFixed(2)}`);
});

function findMax1(arr) {
    return Math.max(...arr);
}

function findMax2(arr) {
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}


const testArray = [5, 8, 2, 10, 3, 6];
const slowest = pf.findSlowFunc([findMax1, findMax2], testArray);
console.log(`The slowest function is: ${slowest}`);

const testCases = [[5, 8, 2], [], [1, 2, 3]];
const mostRobust = pf.findMostRobustFunc([findMax1, findMax2], testCases);
console.log(`The most robust function is: ${mostRobust}`);

const testArrayLarge = Array.from({ length: 10000 }, () => Math.random() * 100);
const averageTime1 = pf.measureAverageExecutionTime(findMax1, [testArrayLarge, testArrayLarge, testArrayLarge]);
console.log(`Average execution time for findMax1: ${averageTime1} ms`);

const averageTime2 = pf.measureAverageExecutionTime(findMax2, [testArrayLarge, testArrayLarge, testArrayLarge]);
console.log(`Average execution time for findMax2: ${averageTime2} ms`);

const comparisonResult = pf.compareFunctions(findMax1, findMax2, [testArrayLarge, testArrayLarge, testArrayLarge]);
console.log(comparisonResult);

const selectedFunction = pf.autoSelectFunction([findMax1, findMax2], [testArrayLarge, testArrayLarge, testArrayLarge]);
console.log(`Auto-selected function: ${selectedFunction}`);

const sequenceInfoGain = '001110010101'; // Binary sequence
const criteriaIndex = 6; // Index to split the sequence
const informationGain = pf.calculateInformationGain(sequenceInfoGain, criteriaIndex);
console.log(`Information Gain: ${informationGain.toFixed(2)}`);

const length = 10; // Length of the binary sequence
const randomSequence = pf.generateRandomBinarySequence(length);
console.log(`Random Binary Sequence: ${randomSequence}`);

const sequenceConsRun = '00111001110001110111'; // Binary sequence
const longestRun = pf.findLongestConsecutiveRun(sequenceConsRun);
console.log(`Longest Consecutive Run: ${longestRun}`);

const sequence1 = '001110010101'; // Binary sequence 1
const sequence2 = '101010010101'; // Binary sequence 2
const crossEntropy = pf.calculateCrossEntropy(sequence1, sequence2);
console.log(`Cross-Entropy: ${crossEntropy.toFixed(2)}`);

const sequenceBelowThreshold = '001100110011'; // Binary sequence
const threshold = 0.5; // Threshold for entropy
const isBelowThreshold = pf.isEntropyBelowThreshold(sequenceBelowThreshold, threshold);
console.log(`Entropy is below threshold: ${isBelowThreshold}`);

const binarySequences = ['001100', '111000', '010101', '000111', '111111'];

const maxEntropySequence = pf.findExtremeEntropySequence(binarySequences, 'max');
console.log(`Sequence with Maximum Entropy: ${maxEntropySequence}`);

const minEntropySequence = pf.findExtremeEntropySequence(binarySequences, 'min');
console.log(`Sequence with Minimum Entropy: ${minEntropySequence}`);


// NEW ADDED FILE FUNCTIONS

// Example Usage
// Change file extensions
pf.changeFileExtension('./move_folders', '.txt', '.csv');

// Delete files with a specific extension
pf.deleteFilesWithExtension('.', '.csv');

// Create a new directory
pf.createDirectory('./new_directory');

// Copy files from one directory to another
pf.copyFiles('./move_folders', './remove_files');

// Get a list of files with a specific extension
const matchingFiles = pf.getFilesWithExtension('.', '.pdf');
console.log('Matching Files:', matchingFiles);

// Remove empty directories
pf.removeEmptyDirectories('./remove_files');

// Specify the folder path
const folderPath = './images';

// Call the function to delete images
pf.deleteImagesInFolder(folderPath, ['.jpg', '.png']);

// Specify the folder path
const folderPath2 = './images';

// Call the function to rename images with a prefix
pf.renameImagesInFolder(folderPath2, (filename) => `holiday_${filename}`);

const myObject = { a: 10, b: 20, c: 30 };

console.log(pf.exponentiateObjectValues(myObject, 2)); // Square all values
console.log(pf.absoluteObjectValues(myObject)); // Take the absolute value of all values
console.log(pf.roundObjectValues(myObject, 1)); // Round all values to 1 decimal place
console.log(pf.concatenateObjectValues(myObject, '_suffix')); // Concatenate "_suffix" to all string values

// Example usage:
const list = [
  { id: 1, data: '23lolhaha456' },
  { id: 2, data: 'haah!3823!hahah' },
  { id: 3, data: 'NoNumericHere' },
];

const keyToExtractFrom = 'data';

const modifiedList = pf.extractNumObjList(list, keyToExtractFrom);
console.log(modifiedList);

// Example usage:
const listObjVal = [
  { id: 1, values: [1, 2, 3, 4] },
  { id: 2, values: [5, 6, 7] },
  { id: 3, values: [8, 9] },
  { id: 4, values: [10] },
  { id: 5, otherValues: [11, 12] },
];

const keyToOperateOn = 'values';

// Define a custom reduction function
function customReductionFunction(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

const modifiedListObjVal = pf.reduceValObjList(listObjVal, keyToOperateOn, customReductionFunction);
console.log(modifiedListObjVal);

```

# Example 7

```js live=true
// Usage example
const readMeFilePath = 'readMeView.md'; // Provide the path to your README.md file
pf.createReadMeViewer(readMeFilePath);

// Define an object with nested properties
const originalObject = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Exampleville',
    },
    hobbies: ['reading', 'gaming'],
};

// Clone the object shallowly
const clonedObject = pf.shallowClone(originalObject);

// Modify the cloned object
clonedObject.name = 'Jane'; // This change will not affect the original object
clonedObject.address.street = '456 Elm St'; // This change will affect the original object's address property
clonedObject.hobbies.push('swimming'); // This change will affect the original object's hobbies property

// Display the original and cloned objects
console.log('Original Object:', originalObject);
console.log('Cloned Object:', clonedObject);

const myArray = [1, 2, 3, 4, 5, 6];
const n = 2;
const m = 3;
const matrix = pf.arrayToMatrix(myArray, n, m);

console.log(matrix);

// Example usage:
const listOfObjects = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];

const updatedList = pf.changeKeyValues(listOfObjects, 'age', 'years');
console.log(updatedList);

// Compress JSON data
const jsonObject = { name: 'Alice', age: 30 };
const compressedJSON = pf.compressJSON(jsonObject);
console.log('Compressed JSON:', compressedJSON);

// Decompress JSON data
const decompressedObject = pf.decompressJSON(compressedJSON);
console.log('Decompressed JSON:', decompressedObject);

// Encode data to base64
const originalData = 'Hello, World!';
const encodedData = pf.encodeBase64(originalData);
console.log('Encoded Data:', encodedData);

// Decode base64 data
const decodedData = pf.decodeBase64(encodedData);
console.log('Decoded Data:', decodedData);

// Encode data to URL-safe base64
const urlUnsafeData = 'This/Is+URL+Unsafe==';
const urlSafeEncodedData = pf.encodeURLSafeBase64(urlUnsafeData);
console.log('URL-Safe Encoded Data:', urlSafeEncodedData);

// Decode URL-safe base64 data
const urlSafeDecodedData = pf.decodeURLSafeBase64(urlSafeEncodedData);
console.log('URL-Safe Decoded Data:', urlSafeDecodedData);

const dataMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const min = 0;
const max = 1;

const normalizedData = pf.normalizeMatrix(dataMatrix, min, max);
console.log(normalizedData);


const size = 4;
const identityMatrix = pf.createIdentityMatrix(size);
console.log(identityMatrix);

const matrix2 = [
    [1e-5, 0, 0],
    [0, 2e-6, 0],
    [0, 0, 3e-7]
];

const epsilon = 1e-6;

const converged = pf.isConverged(matrix2, epsilon);
console.log(converged); // Should return true

const size2 = 3;
const i = 0;
const j = 1;
const theta = Math.PI / 4; // 45 degrees

const rotationMatrix = pf.createRotationMatrix(size2, i, j, theta);
console.log(rotationMatrix);


// Define a sample matrix
const matrix_eigen = [
    [4, 3],
    [2, 1]
]

// Calculate eigenvalues and eigenvectors
const eig = pf.calEigenValVec(matrix_eigen);

// Extract eigenvalues and eigenvectors
const eigenvalues = eig.eigenvalues;
const eigenvectors = eig.eigenvectors;

// Print the results
console.log('Eigenvalues:');
console.log(eigenvalues);
console.log('\nEigenvectors:');
console.log(eigenvectors);


// Define a sample matrix
const matrix_rot = [
    [4, 3, 0],
    [3, 5, 2],
    [0, 2, 6]
];

// Specify the indices (i, j) of the off-diagonal element to be zeroed out
const i_1 = 0;
const j_1 = 1;

// Calculate the rotation angle (theta) using the computeRotationAngle function
const rotationAngle = pf.computeRotationAngle(matrix_rot, i_1, j_1);

// Convert the angle from radians to degrees for readability
const rotationAngleDegrees = (rotationAngle * 180) / Math.PI;

console.log(`Rotation Angle (Radians): ${rotationAngle}`);
console.log(`Rotation Angle (Degrees): ${rotationAngleDegrees}`);


// Example matrix
const symmetricMatrix = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

const nonSymmetricMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(pf.isSymmetric(symmetricMatrix)); // Should return true
console.log(pf.isSymmetric(nonSymmetricMatrix)); // Should return false

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = pf.flattenArray(nestedArray);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


// Example usage:
const userInput1 = "programming"; // Replace with user's input
const searchResults = pf.vectorSearch(userInput1, 5);
searchResults.forEach(result => {
    console.log(`Text: ${result.text}\nSimilarity: ${result.similarity}\n`);
});

console.log('----------------------------------')

// Example usage:
const userInput = "data science"; // Replace with user's input
const searchResults2 = pf.vectorSearch(userInput, 5,json_file='./json_true.json');
searchResults2.forEach(result => {
    console.log(`Text: ${result.text}\nSimilarity: ${result.similarity}\n`);
});


// Example usage:
const inputFile = 'data.txt'; // Replace with the path to your file

pf.fileToJSON(inputFile)
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(error => {
        console.error(error);
    });

// Example usage:
const inputFile2 = 'data.csv'; // Replace with the path to your file

pf.fileToJSON(inputFile2)
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(error => {
        console.error(error);
    });


// Example usage:
const inputFile3 = 'data.txt'; // Replace with the path to your file
const jsonData = pf.textFileToJSON(inputFile3);
console.log(jsonData);

```


* You can check the code from github
* code is made to simplfy the steps on javascript
* I will update the code and function when I find new problems
* Project is open source


