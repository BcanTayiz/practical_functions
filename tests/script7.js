const pf = require('practical-functions')

// Usage example
const readMeFilePath = 'readMeView.md'; // Provide the path to your README.md file
pf.createReadMeViewer(readMeFilePath);

// Define an object with nested properties
const originalObject = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Exampleville',
    },
    hobbies: ['reading', 'gaming'],
};

// Clone the object shallowly
const clonedObject = pf.shallowClone(originalObject);

// Modify the cloned object
clonedObject.name = 'Jane'; // This change will not affect the original object
clonedObject.address.street = '456 Elm St'; // This change will affect the original object's address property
clonedObject.hobbies.push('swimming'); // This change will affect the original object's hobbies property

// Display the original and cloned objects
console.log('Original Object:', originalObject);
console.log('Cloned Object:', clonedObject);

const myArray = [1, 2, 3, 4, 5, 6];
const n = 2;
const m = 3;
const matrix = pf.arrayToMatrix(myArray, n, m);

console.log(matrix);

// Example usage:
const listOfObjects = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];

const updatedList = pf.changeKeyValues(listOfObjects, 'age', 'years');
console.log(updatedList);

// Compress JSON data
const jsonObject = { name: 'Alice', age: 30 };
const compressedJSON = pf.compressJSON(jsonObject);
console.log('Compressed JSON:', compressedJSON);

// Decompress JSON data
const decompressedObject = pf.decompressJSON(compressedJSON);
console.log('Decompressed JSON:', decompressedObject);

// Encode data to base64
const originalData = 'Hello, World!';
const encodedData = pf.encodeBase64(originalData);
console.log('Encoded Data:', encodedData);

// Decode base64 data
const decodedData = pf.decodeBase64(encodedData);
console.log('Decoded Data:', decodedData);

// Encode data to URL-safe base64
const urlUnsafeData = 'This/Is+URL+Unsafe==';
const urlSafeEncodedData = pf.encodeURLSafeBase64(urlUnsafeData);
console.log('URL-Safe Encoded Data:', urlSafeEncodedData);

// Decode URL-safe base64 data
const urlSafeDecodedData = pf.decodeURLSafeBase64(urlSafeEncodedData);
console.log('URL-Safe Decoded Data:', urlSafeDecodedData);

const dataMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const min = 0;
const max = 1;

const normalizedData = pf.normalizeMatrix(dataMatrix, min, max);
console.log(normalizedData);


const size = 4;
const identityMatrix = pf.createIdentityMatrix(size);
console.log(identityMatrix);

const matrix2 = [
    [1e-5, 0, 0],
    [0, 2e-6, 0],
    [0, 0, 3e-7]
];

const epsilon = 1e-6;

const converged = pf.isConverged(matrix2, epsilon);
console.log(converged); // Should return true

const size2 = 3;
const i = 0;
const j = 1;
const theta = Math.PI / 4; // 45 degrees

const rotationMatrix = pf.createRotationMatrix(size2, i, j, theta);
console.log(rotationMatrix);


// Define a sample matrix
const matrix_eigen = [
    [4, 3],
    [2, 1]
]

// Calculate eigenvalues and eigenvectors
const eig = pf.calEigenValVec(matrix_eigen);

// Extract eigenvalues and eigenvectors
const eigenvalues = eig.eigenvalues;
const eigenvectors = eig.eigenvectors;

// Print the results
console.log('Eigenvalues:');
console.log(eigenvalues);
console.log('\nEigenvectors:');
console.log(eigenvectors);


// Define a sample matrix
const matrix_rot = [
    [4, 3, 0],
    [3, 5, 2],
    [0, 2, 6]
];

// Specify the indices (i, j) of the off-diagonal element to be zeroed out
const i_1 = 0;
const j_1 = 1;

// Calculate the rotation angle (theta) using the computeRotationAngle function
const rotationAngle = pf.computeRotationAngle(matrix_rot, i_1, j_1);

// Convert the angle from radians to degrees for readability
const rotationAngleDegrees = (rotationAngle * 180) / Math.PI;

console.log(`Rotation Angle (Radians): ${rotationAngle}`);
console.log(`Rotation Angle (Degrees): ${rotationAngleDegrees}`);


// Example matrix
const symmetricMatrix = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

const nonSymmetricMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(pf.isSymmetric(symmetricMatrix)); // Should return true
console.log(pf.isSymmetric(nonSymmetricMatrix)); // Should return false

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = pf.flattenArray(nestedArray);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


// Example usage:
const userInput1 = "programming"; // Replace with user's input
const searchResults = pf.vectorSearch(userInput1, 5);
searchResults.forEach(result => {
    console.log(`Text: ${result.text}\nSimilarity: ${result.similarity}\n`);
});

console.log('----------------------------------')

// Example usage:
const userInput = "data science"; // Replace with user's input
const searchResults2 = pf.vectorSearch(userInput, 5,json_file='./json_true.json');
searchResults2.forEach(result => {
    console.log(`Text: ${result.text}\nSimilarity: ${result.similarity}\n`);
});


// Example usage:
const inputFile = 'data.txt'; // Replace with the path to your file

pf.fileToJSON(inputFile)
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(error => {
        console.error(error);
    });

// Example usage:
const inputFile2 = 'data.csv'; // Replace with the path to your file

pf.fileToJSON(inputFile2)
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(error => {
        console.error(error);
    });


// Example usage:
const inputFile3 = 'data.txt'; // Replace with the path to your file
const jsonData = pf.textFileToJSON(inputFile3);
console.log(jsonData);