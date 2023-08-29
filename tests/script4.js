const pf = require('practical-functions')

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
