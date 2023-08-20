function meanSquaredError(yTrue, yPred) {
    const n = yTrue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.pow(yTrue[i] - yPred[i], 2);
    }
    return sum / n;
}

function rootMeanSquaredError(yTrue, yPred) {
    return Math.sqrt(meanSquaredError(yTrue, yPred));
}

function relativeSquaredError(yTrue, yPred) {
    const numerator = yTrue.reduce((acc, trueVal, i) => acc + Math.pow(trueVal - yPred[i], 2), 0);
    const meanYTrue = yTrue.reduce((acc, val) => acc + val, 0) / yTrue.length;
    const denominator = yTrue.reduce((acc, trueVal) => acc + Math.pow(trueVal - meanYTrue, 2), 0);
    return numerator / denominator;
}

function meanAbsoluteError(yTrue, yPred) {
    const n = yTrue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.abs(yTrue[i] - yPred[i]);
    }
    return sum / n;
}

function coefficientOfDetermination(yTrue, yPred) {
    const meanYTrue = yTrue.reduce((acc, val) => acc + val, 0) / yTrue.length;
    const numerator = yTrue.reduce((acc, trueVal, i) => acc + Math.pow(trueVal - yPred[i], 2), 0);
    const denominator = yTrue.reduce((acc, trueVal) => acc + Math.pow(trueVal - meanYTrue, 2), 0);
    return 1 - (numerator / denominator);
}

function meanAbsolutePercentageError(yTrue, yPred) {
    const n = yTrue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.abs((yTrue[i] - yPred[i]) / yTrue[i]);
    }
    return (sum / n) * 100;
}

function meanPercentageError(yTrue, yPred) {
    const n = yTrue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += ((yTrue[i] - yPred[i]) / yTrue[i]);
    }
    return (sum / n) * 100;
}

function meanBiasDeviation(yTrue, yPred) {
    const n = yTrue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += (yTrue[i] - yPred[i]);
    }
    return sum / n;
}

function confusionMatrix(predicted, actual) {
    if (predicted.length !== actual.length) {
        throw new Error('The lengths of the predicted and actual arrays must match.');
    }

    const matrix = {
        TP: 0,
        TN: 0,
        FP: 0,
        FN: 0,
    };

    for (let i = 0; i < predicted.length; i++) {
        if (predicted[i] === 1) {
            if (actual[i] === 1) {
                matrix.TP++;
            } else {
                matrix.FP++;
            }
        } else {
            if (actual[i] === 1) {
                matrix.FN++;
            } else {
                matrix.TN++;
            }
        }
    }

    return matrix;
}


module.exports = {
    meanSquaredError:meanSquaredError,
    rootMeanSquaredError:rootMeanSquaredError,
    relativeSquaredError:relativeSquaredError,
    meanAbsoluteError:meanAbsoluteError,
    coefficientOfDetermination:coefficientOfDetermination,
    meanAbsolutePercentageError:meanAbsolutePercentageError,
    meanPercentageError:meanPercentageError,
    meanBiasDeviation:meanBiasDeviation,
    confusionMatrix:confusionMatrix
}