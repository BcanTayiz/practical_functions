const math = require('mathjs');
const { flattenArray } = require("./arrayManuplation");

function createMatrixFromArray(arr, rows, cols) {
    if (arr.length !== rows * cols) {
        throw new Error('Array size must match the number of rows and columns in the matrix.');
    }

    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const index = i * cols + j;
            row.push(arr[index]);
        }
        matrix.push(row);
    }

    return matrix;
}


function prettyPrintMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + '\t'; // Use '\t' for tab spacing between columns
        }
        console.log(row);
    }
}

function createTableFromMatrix(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new Error('Input must be a non-empty 2D array.');
    }

    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Create the table element
    const table = document.createElement('table');

    // Create table rows and cells
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td'); // Use 'th' for the header row
            cell.textContent = matrix[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    return table;
}

// Function to add two matrices
function addMatrices(matrixA, matrixB) {
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;

    if (numRows !== matrixB.length || numCols !== matrixB[0].length) {
        throw new Error('Matrix dimensions must match for addition.');
    }

    const resultMatrix = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        resultMatrix.push(row);
    }

    return resultMatrix;
}

// Function to subtract two matrices
function subtractMatrices(matrixA, matrixB) {
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;

    if (numRows !== matrixB.length || numCols !== matrixB[0].length) {
        throw new Error('Matrix dimensions must match for subtraction.');
    }

    const resultMatrix = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            row.push(matrixA[i][j] - matrixB[i][j]);
        }
        resultMatrix.push(row);
    }

    return resultMatrix;
}

// Function to multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    const numRowsA = matrixA.length;
    const numColsA = matrixA[0].length;
    const numRowsB = matrixB.length;
    const numColsB = matrixB[0].length;

    if (numColsA !== numRowsB) {
        throw new Error('Number of columns in matrixA must match the number of rows in matrixB for multiplication.');
    }

    const resultMatrix = [];

    for (let i = 0; i < numRowsA; i++) {
        const row = [];
        for (let j = 0; j < numColsB; j++) {
            let sum = 0;
            for (let k = 0; k < numColsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        resultMatrix.push(row);
    }

    return resultMatrix;
}

// Function to transpose a matrix
function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const resultMatrix = [];

    for (let j = 0; j < numCols; j++) {
        const row = [];
        for (let i = 0; i < numRows; i++) {
            row.push(matrix[i][j]);
        }
        resultMatrix.push(row);
    }

    return resultMatrix;
}

function normalizeMatrix(matrix, min, max) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const normalizedMatrix = [];

    for (let col = 0; col < numCols; col++) {
        const columnData = matrix.map(row => row[col]);
        const minValue = Math.min(...columnData);
        const maxValue = Math.max(...columnData);

        const normalizedColumn = columnData.map(value => {
            return ((value - minValue) / (maxValue - minValue)) * (max - min) + min;
        });

        for (let row = 0; row < numRows; row++) {
            if (!normalizedMatrix[row]) {
                normalizedMatrix[row] = [];
            }
            normalizedMatrix[row][col] = normalizedColumn[row];
        }
    }

    return normalizedMatrix;
}

function centerMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const centeredMatrix = [];

    for (let col = 0; col < numCols; col++) {
        const columnData = matrix.map(row => row[col]);
        const mean = columnData.reduce((acc, val) => acc + val, 0) / numRows;

        const centeredColumn = columnData.map(value => value - mean);

        for (let row = 0; row < numRows; row++) {
            if (!centeredMatrix[row]) {
                centeredMatrix[row] = [];
            }
            centeredMatrix[row][col] = centeredColumn[row];
        }
    }

    return centeredMatrix;
}

function calculateCovarianceMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const centeredMatrix = centerMatrix(matrix);

    const covarianceMatrix = [];

    for (let col1 = 0; col1 < numCols; col1++) {
        covarianceMatrix.push([]);
        for (let col2 = 0; col2 < numCols; col2++) {
            const column1 = centeredMatrix.map(row => row[col1]);
            const column2 = centeredMatrix.map(row => row[col2]);
            const covariance = (column1.reduce((acc, val, index) => acc + val * column2[index], 0)) / (numRows - 1);
            covarianceMatrix[col1].push(covariance);
        }
    }

    return covarianceMatrix;
}

function createIdentityMatrix(size) {
    const identityMatrix = [];

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(i === j ? 1 : 0); // Diagonal elements are 1, others are 0
        }
        identityMatrix.push(row);
    }

    return identityMatrix;
}

function isConverged(matrix, epsilon) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Iterate through the off-diagonal elements (excluding the diagonal)
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (i !== j && Math.abs(matrix[i][j]) > epsilon) {
                // If any off-diagonal element is larger than epsilon, it's not converged
                return false;
            }
        }
    }

    // If all off-diagonal elements are smaller than epsilon, it's converged
    return true;
}

function findLargestOffDiagonalElement(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    let maxElement = 0;
    let rowIndex = 0;
    let colIndex = 0;

    // Iterate through the off-diagonal elements (excluding the diagonal)
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (i !== j && Math.abs(matrix[i][j]) > Math.abs(maxElement)) {
                // Update maxElement and indices if a larger off-diagonal element is found
                maxElement = matrix[i][j];
                rowIndex = i;
                colIndex = j;
            }
        }
    }

    return { i: rowIndex, j: colIndex, maxValue: maxElement };
}

function createRotationMatrix(size, i, j, theta) {
    // Create an identity matrix of size 'size'
    const rotationMatrix = createIdentityMatrix(size);

    // Calculate sine and cosine of the rotation angle (theta)
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    // Update the elements of the rotation matrix
    rotationMatrix[i][i] = cosTheta;
    rotationMatrix[j][j] = cosTheta;
    rotationMatrix[i][j] = -sinTheta;
    rotationMatrix[j][i] = sinTheta;

    return rotationMatrix;
}

function isSymmetric(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Check if the matrix is square (number of rows equals number of columns)
    if (numRows !== numCols) {
        return false;
    }

    // Check if the matrix is symmetric
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < i; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }

    // If all checks pass, the matrix is symmetric
    return true;
}

function computeRotationAngle(matrix, i, j) {
    // Ensure the matrix is square and the indices are valid
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    if (numRows !== numCols || i < 0 || i >= numRows || j < 0 || j >= numCols) {
        throw new Error('Invalid matrix or indices.');
    }

    // Check if the off-diagonal element is zero (no rotation needed)
    if (matrix[i][j] === 0) {
        return 0;
    }

    // Calculate the rotation angle (theta) using arctan2
    const diff = matrix[j][j] - matrix[i][i];
    const atan2Value = Math.atan2(2 * matrix[i][j], diff);

    return 0.5 * atan2Value;
}







function calEigenValVec(matrix) {
    // Check if the matrix is square
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    if (numRows !== numCols) {
        throw new Error('Matrix must be square for eigenvalue and eigenvector calculations.');
    }

    // Calculate eigenvalues and eigenvectors using math.js
    const eigs = math.eigs(matrix)

    // Extract eigenvalues and eigenvectors
    const eigenvalues = eigs.values;
    const eigenvectors = eigs.vectors;
    // Convert the results to JavaScript arrays
    const eigenvaluesArray = flattenArray(eigenvalues);
    const eigenvectorsArray = flattenArray(eigenvectors)
    // Return the eigenvalues and eigenvectors as arrays
    return { eigenvalues: eigenvaluesArray, eigenvectors: eigenvectorsArray };
}






module.exports = {
    createMatrixFromArray:createMatrixFromArray,
    prettyPrintMatrix:prettyPrintMatrix,
    createTableFromMatrix:createTableFromMatrix,
    addMatrices:addMatrices,
    subtractMatrices:subtractMatrices,
    multiplyMatrices:multiplyMatrices,
    transposeMatrix:transposeMatrix,
    normalizeMatrix:normalizeMatrix,
    createIdentityMatrix:createIdentityMatrix,
    isConverged:isConverged,
    createRotationMatrix:createRotationMatrix,
    calEigenValVec:calEigenValVec,
    computeRotationAngle:computeRotationAngle,
    isSymmetric:isSymmetric,
}