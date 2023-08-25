// Function to calculate the moving average of a sequence
function calculateMovingAverage(sequence, windowSize) {
    const movingAverage = [];
    for (let i = 0; i < sequence.length; i++) {
        if (i < windowSize) {
            // If there are not enough values before the current index, use available values
            movingAverage.push(sequence.slice(0, i + 1).reduce((sum, num) => sum + num) / (i + 1));
        } else {
            // Calculate the moving average over the specified window size
            const window = sequence.slice(i - windowSize + 1, i + 1);
            movingAverage.push(window.reduce((sum, num) => sum + num) / windowSize);
        }
    }
    return movingAverage;
}

// Function to calculate the surprise effect and adjust the prediction
function predictNextNumbers(sequence, windowSize) {
    // Calculate the moving average of the sequence
    const movingAverage = calculateMovingAverage(sequence, windowSize);

    // Calculate the probability distribution of differences between consecutive numbers
    const differences = [];
    for (let i = 1; i < sequence.length; i++) {
        differences.push(Math.abs(sequence[i] - sequence[i - 1]));
    }
    const totalDifference = differences.reduce((sum, diff) => sum + diff);
    const probabilityDistribution = differences.map(diff => diff / totalDifference);

    // Generate random values based on the probability distribution
    const randomValues = [];
    for (let i = 0; i < sequence.length; i++) {
        const randomValue = Math.random();
        let cumulativeProbability = 0;
        let nextDifference = 0;
        for (let j = 0; j < probabilityDistribution.length; j++) {
            cumulativeProbability += probabilityDistribution[j];
            if (randomValue <= cumulativeProbability) {
                nextDifference = differences[j];
                break;
            }
        }
        randomValues.push(nextDifference);
    }

    // Predict the next numbers by adding the moving average and custom noise
    const predictions = [];
    for (let i = 0; i < sequence.length; i++) {
        const nextNumber = movingAverage[i] + randomValues[i];
        predictions.push(nextNumber);
    }

    return { y_true: sequence.slice(1), y_pred: predictions };
}

function predicNumLearning(sequence, windowSize, learningRate, iterations) {
    // Define a function to calculate the mean squared error
    function calculateMSE(predictions, trueValues) {
        const n = trueValues.length;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += Math.pow(trueValues[i] - predictions[i], 2);
        }
        return sum / n;
    }

    // Initialize predictions with the original sequence
    let predictions = sequence.slice();
    
    // Perform optimization using gradient descent
    for (let iter = 0; iter < iterations; iter++) {
        // Calculate the gradient (simplified)
        const gradient = [];
        for (let i = windowSize; i < sequence.length; i++) {
            const trueValue = sequence[i];
            const predictedValue = predictions[i - 1] + (predictions[i - 1] - predictions[i - windowSize]);
            const error = trueValue - predictedValue;
            gradient.push(error);
        }
        
        // Update predictions using the gradient and learning rate
        for (let i = windowSize; i < sequence.length; i++) {
            predictions[i] += learningRate * gradient[i - windowSize];
        }

        // Calculate the MSE for the updated predictions
        const mse = calculateMSE(predictions.slice(windowSize), sequence.slice(windowSize));
        console.log(`Iteration ${iter + 1}, MSE: ${mse}`);
    }

    return predictions;
}



module.exports = {
    calculateMovingAverage:calculateMovingAverage,
    predictNextNumbers:predictNextNumbers,
    predicNumLearning:predicNumLearning,
}