function calculateCorrelationMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    if (numRows < 2 || numCols < 2) {
        throw new Error('Matrix must have at least 2 rows and 2 columns.');
    }

    const correlationMatrix = [];

    // Initialize the correlationMatrix with zeros
    for (let i = 0; i < numCols; i++) {
        correlationMatrix.push(new Array(numCols).fill(0));
    }

    for (let col1 = 0; col1 < numCols; col1++) {
        for (let col2 = col1; col2 < numCols; col2++) {
            // Calculate the correlation coefficient between col1 and col2
            let sumX = 0;
            let sumY = 0;
            let sumXY = 0;
            let sumX2 = 0;
            let sumY2 = 0;

            for (let row = 0; row < numRows; row++) {
                const x = matrix[row][col1];
                const y = matrix[row][col2];

                sumX += x;
                sumY += y;
                sumXY += x * y;
                sumX2 += x * x;
                sumY2 += y * y;
            }

            const n = numRows;
            const numerator = n * sumXY - sumX * sumY;
            const denominator = Math.sqrt((n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2));

            const correlationCoefficient = denominator !== 0 ? numerator / denominator : 0;

            correlationMatrix[col1][col2] = correlationCoefficient;
            correlationMatrix[col2][col1] = correlationCoefficient; // Correlation matrix is symmetric
        }
    }

    return correlationMatrix;
}

function calculateCorrelationCoefficient(dataX, dataY) {
    if (dataX.length !== dataY.length) {
        throw new Error('Input arrays must have the same length.');
    }

    const n = dataX.length;
    const sumX = dataX.reduce((acc, val) => acc + val, 0);
    const sumY = dataY.reduce((acc, val) => acc + val, 0);
    const sumXY = dataX.reduce((acc, val, index) => acc + val * dataY[index], 0);
    const sumX2 = dataX.reduce((acc, val) => acc + val ** 2, 0);
    const sumY2 = dataY.reduce((acc, val) => acc + val ** 2, 0);

    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2));

    const correlationCoefficient = denominator !== 0 ? numerator / denominator : 0;

    return correlationCoefficient;
}



module.exports = {
    calculateCorrelationMatrix:calculateCorrelationMatrix,
    calculateCorrelationCoefficient:calculateCorrelationCoefficient,
}