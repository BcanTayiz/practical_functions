const pf = require('practical-functions')


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


