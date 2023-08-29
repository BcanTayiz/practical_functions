const pf = require('practical-functions')

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










