const pf = require('practical-functions')



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