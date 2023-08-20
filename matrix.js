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



module.exports = {
    createMatrixFromArray:createMatrixFromArray,
    prettyPrintMatrix:prettyPrintMatrix,
    createTableFromMatrix:createTableFromMatrix,
    addMatrices:addMatrices,
    subtractMatrices:subtractMatrices,
    multiplyMatrices:multiplyMatrices,
    transposeMatrix:transposeMatrix
}