const pf = require('practical-functions')

const informalSentences = [
    "Hey, can you give me a hand with this?",
    "I wanna go to the movies tonight.",
    "What's up? Got any plans for the weekend?",
    "Let's grab some lunch!",
    "It's gonna be awesome!",
    "I gotta finish this report by tomorrow.",
    "Can't make it to the meeting, sorry.",
    "I'll hit you up later."
];

const formalSentences = [
    "Hello, could you please assist me with this?",
    "I would like to attend the cinema this evening.",
    "How are you? Do you have any plans for the upcoming weekend?",
    "Would you like to join me for a midday meal?",
    "It will be quite impressive.",
    "I must complete this report by tomorrow.",
    "I regret to inform you that I won't be able to attend the meeting.",
    "I will contact you later."
];

// Example usage:
for (let i = 0; i < informalSentences.length; i++) {
    console.log("Informal: " + pf.detectNaiveInformality(informalSentences[i]))
    console.log("Formal: " + pf.detectNaiveInformality(formalSentences[i]))
    console.log("\n");
}

// Test cases, works better
console.log(pf.detectNaiveInformality("I am writing to express my sincere gratitude."));
console.log(pf.detectNaiveInformality("Hello, how are you today?"));
console.log(pf.detectNaiveInformality("Best regards,"));

console.log(pf.detectNaiveInformality("Hey, what's up?"));
console.log(pf.detectNaiveInformality("I wanna go to the movies tonight."));
console.log(pf.detectNaiveInformality("LOL, that's hilarious!"));

// Test case 1: Text contains an informal word
const text1 = "Hey, what's up? Wanna grab some lunch?";
console.log(pf.detectNaiveInformality(text1),'TRUE'); // true

// Test case 2: Text is formal and does not contain informal words
const text2 = "Dear Sir, I am writing to inquire about your services.";
console.log(pf.detectNaiveInformality(text2),'FALSE'); // false

// Test case 3: Text contains an informal word within a longer word
const text3 = "The word 'hell' is often used informally.";
console.log(pf.detectNaiveInformality(text3),'FALSE'); // false

// Test case 4: Text is empty
const text4 = "";
console.log(pf.detectNaiveInformality(text4),'FALSE'); // false

// Test case 5: Text contains multiple informal words
const text5 = "Hi there! What's up? Wanna hang out after work?";
console.log(pf.detectNaiveInformality(text5),'TRUE'); // true

// Test case 6: Text contains formal words only
const text6 = "I respectfully submit my application for your consideration.";
console.log(pf.detectNaiveInformality(text6),'FALSE'); // false

// Test Data: Array of numbers
const testData = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Function 1: Find the sum of all numbers in the array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Function 2: Find the maximum number in the array
function maxArray(arr) {
    return Math.max(...arr);
}

// Function 3: Calculate the average of all numbers in the array
function averageArray(arr) {
    const sum = sumArray(arr);
    return sum / arr.length;
}

const functionsToTest = [sumArray, maxArray, averageArray];

const fastestFunction = pf.findFastFunc(functionsToTest, testData);
console.log('Fastest and robust function:', fastestFunction.name);


let all_list = pf.combineAndFlattenLists([pf.genRanUserList(3),pf.genRandEmailList(3),pf.genRandDateObjList(3),pf.genRandEventObjList(3)])
console.log(all_list)


// Example usage:
const rootFolder = './test-folder';
const outputFolder = './images';
const blockedFolders = ['blocked_folder1', 'blocked_folder2'];

pf.convertImagesInFolder(
    rootFolder,
    outputFolder,
    ['.jpg', '.png', '.webp'], // Add '.webp' to accept WebP format
    800,
    600,
    { width: 300, height: 300 },
    blockedFolders
  );


// Example usage:
const password = 'MyStrongP@ssw0rd';
const strength = pf.checkPasswordStrength(password);
console.log(`Password strength: ${strength}`);

// Example usage: Generate a random password of length 12
const randomPassword = pf.generateRandomPassword(12);
console.log("Random Password:", randomPassword);

// Example usage:
const isPasswordValid = pf.validatePasswordPolicy('My$tr0ngP@ss');
console.log('Password is Valid:', isPasswordValid);

const password2 = 'SecureP@ss12!Ad-123';
const isPasswordValid2= pf.validatePasswordPolicy(password2);
console.log('Password is Valid:', isPasswordValid2);


const folderPath = '.'; // Replace with the actual folder path
const ignoreDirs = ['node_modules', 'other_dir_to_ignore']; // Specify directories to ignore
pf.countLinesInFolder(folderPath, ignoreDirs)
  .then((totalLines) => {
    if (totalLines !== -1) {
      console.log(`Total Lines of Code: ${totalLines}`);
    } else {
      console.log('Error occurred during counting lines.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  const myObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      zip: '10001',
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      }
    },
    hobbies: ['Reading', 'Cooking', 'Traveling'],
    scores: [85, 92, 78],
    isStudent: true,
    additionalInfo: {
      interests: ['Sports', 'Music'],
      rating: 4.5
    }
  };
  
  const objectDetails = pf.getObjectDetails(myObject);
  console.log(objectDetails);

  const lengthInMeters = 5;
const lengthInFeet = pf.convertMeasurement(lengthInMeters, 'meter', 'feet');
console.log(`${lengthInMeters} meters is equal to ${lengthInFeet} feet.`);

const massInKg = 10;
const massInPounds = pf.convertMeasurement(massInKg, 'kg', 'pound');
console.log(`${massInKg} kilograms is equal to ${massInPounds} pounds.`);

const temperatureInCelsius = 25;
const temperatureInFahrenheit = pf.convertMeasurement(temperatureInCelsius, 'celsius', 'fahrenheit');
console.log(`${temperatureInCelsius} degrees Celsius is equal to ${temperatureInFahrenheit} degrees Fahrenheit.`);

// Add more examples for other measurement types as needed.

// Example usage with custom parameters:
const nNumber = 1000;

const customUniformNumbers = pf.generateUniformDistribution(nNumber, 5, 15); // Between 5 and 15
const customNormalNumbers = pf.generateNormalDistribution(nNumber, 10, 2); // Mean = 10, Std Deviation = 2
const customExponentialNumbers = pf.generateExponentialDistribution(nNumber, 0.7); // Lambda = 0.7
const customPoissonNumbers = pf.generatePoissonDistribution(nNumber, 3); // Lambda = 3
const customBinomialNumbers = pf.generateBinomialDistribution(nNumber, 0.3); // n = 10, p = 0.3
const customGeometricNumbers = pf.generateGeometricDistribution(nNumber, 0.1); // p = 0.1

console.log(customUniformNumbers,'Uniform')
console.log(customNormalNumbers,'Normal')
console.log(customExponentialNumbers,'Exponential')
console.log(customPoissonNumbers,'Poisson')
console.log(customBinomialNumbers,'Uniform')
console.log(customGeometricNumbers,'Geometric')


const spendingCategories = ['food', 'rent'];
const earningCategories = ['salary', 'freelance'];

const financialData = {
  food: [200, 150, 180],
  rent: [1200, 1200, 1200],
  salary: [3000, 3000, 3000],
  freelance: [1000, 1200, 800],
};

const summaryObject = pf.calculateFinancialSummary(spendingCategories, earningCategories, financialData, 'object');
console.log(summaryObject);

const summaryTable = pf.calculateFinancialSummary(spendingCategories, earningCategories, financialData, 'table');
console.log(summaryTable);
