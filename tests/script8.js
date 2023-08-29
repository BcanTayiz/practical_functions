const pf = require('practical-functions')


// Example usage:
const length = 5; // Change this to your desired array length
const value = 0;  // Change this to the value you want in the array
const resultArray = pf.createArrayWithValues(length, value);
console.log(resultArray);

const length2 = 5;
const value2 = 42;
const newArray = pf.createArrayWithValues(length2, value2);
console.log(newArray);
// Output: [42, 42, 42, 42, 42]

const length3 = 5;
const min = 1;
const max = 100;
const randomArray = pf.createRandomArray(length3, min, max);
console.log(randomArray);
// Output: [83, 7, 45, 96, 32]

const length4 = 4;
const value4 = "Hello";
const repeatedArray = pf.createArrayWithRepeatedValue(length4, value4);
console.log(repeatedArray);
// Output: ["Hello", "Hello", "Hello", "Hello"]

const length5 = 3;
const value5 = true;
const booleanArray = pf.createBooleanArray(length5, value5);
console.log(booleanArray);
// Output: [true, true, true]

const length6 = 2;
const emptyArray = pf.createEmptyArray(length6);
console.log(emptyArray);
// Output: [ <2 empty items> ]

const startDate = new Date('2023-08-01');
const endDate = new Date('2023-08-05');
const dateArray = pf.createDateArray(startDate, endDate);
console.log(dateArray);
// Output: An array of Date objects for each day from August 1 to August 5, 2023.

const rows = 3;
const cols = 2;
const initialValue = 0;
const matrix = pf.create2DArray(rows, cols, initialValue);
console.log(matrix);
/* Output:
[
    [0, 0],
    [0, 0],
    [0, 0]
]
*/

// Example usage:
const valueList = ["apple", "banana", "cherry", "date"];
const lengthList = 5; // Change this to the desired length of the random array
const randomArrayList = pf.createRandomArrayFromList(valueList, lengthList);
console.log(randomArrayList);

// Example usage:
const sampleText = "apple banana apple cherry banana";
const searchItems = ["apple", "banana", "cherry"];

const matchCounts = pf.countMatchesInText(sampleText, searchItems);

console.log(matchCounts);

// Example usage:
const valuesToCount = [1, 2, 3, 1, 2, 4, 2, 5];
const valuesGiven = [1, 2, 4];

const countedValues = pf.countSelectedValues(valuesToCount, valuesGiven);

console.log(countedValues);

// Example usage:
const dataArray = [1, 2, 3, 5, 7, 8, 9, 12, 15, 20];
const binArray = [
    [0, 5],
    [5, 10],
    [10, 15],
    [15, 20],
];

const countedValuesBin = pf.countValuesInBins(dataArray, binArray);

console.log(countedValuesBin);

// Example usage:
const dataArray2 = pf.createRandomArray(30, 0, 100);
const numBins = 5;

const binArray2 = pf.createBinsFromArray(dataArray2, numBins);

console.log(binArray2);

// Example usage:
function functionA() {
    return "Hello, world!";
}

function functionB() {
    return "Hello, universe!";
}

const similarity = pf.compareFunctionSimilarity(functionA, functionB);
console.log(`Function similarity: ${similarity}`);

// Example usage:
const similarityJaccard = pf.jaccardSimilarity("hello", "hola");
console.log(`Jaccard Similarity: ${similarityJaccard}`);

// Example usage:
const queries = ["natural language processing", "machine learning"];
const documents = [
    "Natural language processing is a field of study in machine learning.",
    "Machine learning algorithms are used in natural language processing.",
    "Deep learning is a subset of machine learning.",
    "Text analysis and data processing are important in NLP."
];

const similarities = pf.latentSemanticAnalysis(queries, documents);
console.log(similarities);

// Example usage:
const sequence = pf.createRandomArray(100,0,100)
const windowSize = 3; // Adjust the window size as needed

const { y_true, y_pred } = pf.predictNextNumbers(sequence, windowSize);

console.log(pf.meanSquaredError(y_pred.slice(-(y_true.length)),y_true),'MEAN SQUARED ERROR')
console.log(pf.rootMeanSquaredError(y_pred.slice(-(y_true.length)),y_true),'ROOT MEAN SQUARED ERROR')
console.log(pf.recursiveMathOperation(op='sum',1,2,3,4))
console.log(pf.performMathOperation('sum',y_pred))
console.log(pf.performMathOperation('sum',y_true))

const learningRate = 0.01; // Learning rate for gradient descent
const iterations = 100; // Number of optimization iterations

const optimizedPredictions = pf.predicNumLearning(sequence, windowSize, learningRate, iterations);
console.log(optimizedPredictions.length,sequence.length)

console.log(pf.meanAbsoluteError(optimizedPredictions,sequence),'ABSOLUTE ERROR')
console.log(pf.meanSquaredError(optimizedPredictions,sequence),'MEAN SQUARED ERROR')
console.log(pf.relativeSquaredError(optimizedPredictions,sequence),'RELATIVE SQUARED ERROR')


// Example data: List of students with grades and scores
const students = [
    { name: "Alice", grade: "A", score: 95 },
    { name: "Bob", grade: "B", score: 85 },
    { name: "Charlie", grade: "A", score: 90 },
    { name: "David", grade: "C", score: 75 },
    { name: "Eve", grade: "B", score: 88 },
];

// Create a new instance of the GroupBy class and pass in the data
const grouper = new pf.groupBy(students);

// Group the data by the "grade" property
grouper.by(student => student.grade);

// Calculate the mean "score" for each grade group
const meanScoresByGrade = grouper.mean();
const modeScoresByGrade = grouper.mode();
const medianScoresByGrade = grouper.median()
const rangeScoreByGrade = grouper.range()
const stdScoreByGrade = grouper.standardDeviation()

console.log(meanScoresByGrade);
console.log(modeScoresByGrade);
console.log(medianScoresByGrade)
console.log(rangeScoreByGrade)
console.log(stdScoreByGrade)

// Example API response with nested objects and arrays
const apiResponse = {
    data: [
        {
            name: 'John Doe',
            age: 30,
            scores: [95, 88, 75]
        },
        {
            name: 'Jane Smith',
            age: 28,
            scores: [90, 85, 78]
        }
    ]
};

// Call the function with the API response
const largestNode = pf.enhanceApiResponse(apiResponse);

// Print the largest node
console.log(largestNode);

// Example 1: Nested Objects
const apiResponse1 = {
    user: {
        name: 'John Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Exampleville'
        }
    },
    orders: [
        { id: 1, total: 50 },
        { id: 2, total: 75 },
        { id: 3, total: 100 }
    ]
};

const largestNode1 = pf.enhanceApiResponse(apiResponse1);
console.log('Example 1 - Largest Node:', largestNode1);

// Example 2: Arrays of Objects
const apiResponse2 = [
    {
        name: 'Item 1',
        details: {
            description: 'Description for Item 1',
            price: 25
        }
    },
    {
        name: 'Item 2',
        details: {
            description: 'Description for Item 2',
            price: 30
        }
    },
    {
        name: 'Item 3',
        details: {
            description: 'Description for Item 3',
            price: 20
        }
    }
];

const largestNode2 = pf.enhanceApiResponse(apiResponse2);
console.log('Example 2 - Largest Node:', largestNode2);

// Example 3: Deeply Nested Objects
const apiResponse3 = {
    level1: {
        level2: {
            level3: {
                data: 'Deeply Nested Data'
            }
        }
    }
};

const largestNode3 = pf.enhanceApiResponse(apiResponse3);
console.log('Example 3 - Largest Node:', largestNode3);

// Example API response with various data types
const apiResponseFilter = {
    name: 'John Doe',
    age: 30,
    birthdate: '1992-05-15',
    address: {
        street: '123 Main St',
        city: 'Exampleville'
    },
    scores: [95, 88, 75, 'A+'],
    metadata: {
        createdDate: new Date('2023-01-10'),
        updatedDate: new Date('2023-08-15')
    }
};

// Search for dates within the API response
const datesFound = pf.findDataByType(apiResponseFilter, 'object');
console.log('Objects Found:', datesFound);

// Search for strings within the API response
const stringsFound = pf.findDataByType(apiResponseFilter, 'string');
console.log('Strings Found:', stringsFound);

// Search for numbers within the API response
const numbersFound = pf.findDataByType(apiResponseFilter, 'number');
console.log('Numbers Found:', numbersFound);


// Example API response with various data types
const apiResponseKeys = {
    name: 'John Doe',
    age: 30,
    birthdate: '1992-05-15',
    address: {
        street: '123 Main St',
        city: 'Exampleville'
    },
    scores: [95, 88, 75, 'A+'],
    metadata: {
        createdDate: new Date('2023-01-10'),
        updatedDate: new Date('2023-08-15')
    }
};

// Search for objects within the API response along with their keys
const objectsFound = pf.findDataWithKeysByType(apiResponseKeys, 'object');
console.log('Objects Found:', objectsFound);

// Search for strings within the API response along with their keys
const stringsFound2 = pf.findDataWithKeysByType(apiResponse, 'string');
console.log('Strings Found:', stringsFound2);

// Search for numbers within the API response along with their keys
const numbersFound3 = pf.findDataWithKeysByType(apiResponse, 'number');
console.log('Numbers Found:', numbersFound3);
