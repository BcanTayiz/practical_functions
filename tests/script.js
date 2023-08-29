const pf = require('practical-functions')

let list = [1,2,3,4,5,6]
let object = {'a':1,'b':2,'c':3}
const objectsList = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob' ,age:2},
    {name: 'mikael',age:15}
];

const originalObject = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming'],
    address: {
        city: 'New York',
        country: 'USA'
    }
};

console.log(pf.checkValue(list,[4,5]))
console.log(pf.modulerCheck(list,[1,2,3]))
console.log(pf.deleteValues(list,[1,2,3]))
console.log(pf.deleteValues(object,['a','b']))

console.log(pf.validateEmail('asdasd@index.com'),'EMAİL VALIDATE')
console.log(pf.validateEmail('asdasd@gmail.com'),'EMAİL VALIDATE')
console.log(pf.validateEmail('asdasd@.com'),'EMAİL VALIDATE')
console.log(pf.validateEmail('asdasd@yandex.com'),'EMAİL VALIDATE')


console.log(pf.createRandomUuid4())
console.log(pf.objectSort(objectsList,'age'))
console.log(pf.hasKeyInObjectsList(objectsList,'name'))

console.log(pf.valueEmpty('0'))
console.log(pf.valueEmpty([]))
console.log(pf.deepClone(originalObject))

console.log(pf.checkValue(originalObject,'John'))
console.log(pf.transformBoolean('true'))

const currentDate = new Date();
console.log(pf.dateToString(currentDate, 'tr-TR', 'day-month-year', '/'));
console.log(pf.dateToString(currentDate, 'tr-TR', 'month-year', '-'));
console.log(pf.dateToString(currentDate, 'tr-TR', 'month-day', '.'));

const originalString = 'This is an example string that we want to split into multiple lines based on word count.';
const wordCount = 5;
const multiLineHTML = pf.convertToMultilineHTML(originalString, wordCount);
console.log(multiLineHTML)

const jsonData = {
    name: 'John',
                                            age: 30,
                        city: 'New York',
    great:{
        values:[1,2,3,4,      5,2,3,],mean:{'a':4,'b':5}
    }
};
console.log(pf.prettifierJson(jsonData))


console.log(pf.checkArray({'a':1,'b':2,'c':3}))

const objList = [
    { key1: 'value1', key2: 'value2' },
    { key3: 'value3', key4: 'value4' }
];

console.log(pf.mergeObjects(objList))
console.log(pf.objectLength(pf.mergeObjects(objList)))

async function main() {
    try {
        const result = await pf.fileToArray(['text.txt', 'text2.txt']);
        console.log(result);
    } catch (error) {
        console.error('Hata:', error);
    }
}

main();

var d1 = new Date();
var d2 = new Date(d1);

console.log(pf.checkDates(d1,d2),'CHECK DATES')

// usage example:
var a = ['a', 1, 'a', 2, '1'];
console.log(pf.filterUnique(a,true,false))
console.log(pf.filterUnique(a,false,false))
console.log(pf.filterUnique(a,true,true))
console.log(pf.filterUnique(a,false,true))


console.log(pf.multipleConditions([1,2,3,4,5],[1,2,3,4,5]),'MULTIPLE CONDITIONS')

console.log(pf.numberWithCommas(10000000000),'NUMBER WITH COMMAS')



console.log(pf.isNumeric(100.23123),'IS NUMERIC?')
console.log(pf.isNumeric('1000.1239239'),'IS NUMERIC?')
console.log(pf.isNumeric('10230.sasdasd'),'IS NUMERIC?')


console.log(pf.randomRange(20,30),'RANDOM RANGE')
console.log(pf.randomRange(20,30,3),'RANDOM RANGE')
console.log(pf.randomRange(20,30,5),'RANDOM RANGE')

console.log(pf.isNumeric(100.23123,true),'IS NUMERIC?')
console.log(pf.isNumeric('1000.1239239',true),'IS NUMERIC?')
console.log(pf.isNumeric('10230.sasdasd',true),'IS NUMERIC?')

console.log(pf.getNumbers(2,10,3),'GET NUMBERS')
console.log(pf.getNumbers(10,1,-3),'GET NUMBERS')

var d1 = new Date();
console.log(pf.isValidDate(d1),'VAL DATE')
console.log(pf.isValidDate('10.1.2020'),'VAL DATE')
console.log(pf.isValidDate('10-20-300'),'VAL DATE')


console.log(pf.shuffleArrayRandom([1,2,4,123,4,5,2,100]),'SHUFFLE ARRAY')

console.log(pf.createObjectFromLists([1,2,3,4,5,6],[1,2,3]),'OBJECT FROM LISTS')
console.log(pf.createObjectFromLists([1,2],[1,2,3]),'OBJECT FROM LISTS')

let objValue = {'a':1,'b':2,'c':3}
console.log(pf.alterObjectValues(objValue,'sum',4),'ALTER OBJECT VALUES')
console.log(pf.alterObjectValues(objValue,'multiply',4),'ALTER OBJECT VALUES')
console.log(pf.alterObjectValues(objValue,'divide',4),'ALTER OBJECT VALUES')
console.log(pf.alterObjectValues(objValue,'substract',4),'ALTER OBJECT VALUES')

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(pf.listReducer(array,'sum'),'listReducer VALUES')
console.log(pf.listReducer(array,'multiply'),'listReducer VALUES')
console.log(pf.listReducer(array,'divide'),'listReducer VALUES')
console.log(pf.listReducer(array,'substract'),'listReducer VALUES')

const lol = () => {
    console.log('ha')
}

console.log(pf.getType('a'))
console.log(pf.getType(123))
console.log(pf.getType(lol))
console.log(pf.getType(array))


const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomItems = pf.getRandomItemsFromArray(originalArray, 3);
console.log(randomItems);


var hello = "Hello World";
console.log(pf.replaceAt(hello,2,'!!'))


console.log(pf.swapArrayElements(originalArray,2,4),'SWAP ELEMENTS')
console.log(pf.swapArrayElements(originalArray,0,9),'SWAP ELEMENTS')

console.log(pf.compareLists([1,2,3,4],[1,2,3]))


console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'max',1),'RETURN MAX MIN')
console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'min',1),'RETURN MAX MIN')
console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'max',3),'RETURN MAX MIN')
console.log(pf.findMaxMin([12,3,4,123,4,5234,3,44],'min',3),'RETURN MAX MIN')

const duplicateKeyObj = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 3, name: 'Jeff' },
    {id:5,name:'Charles'},
    {id:6,name:'Charlie'}

];

console.log(pf.removeDuplicatesByKey(duplicateKeyObj,'name'),'DUPLICATE KEY')
console.log(pf.removeDuplicatesByKey(duplicateKeyObj,'id'),'DUPLICATE KEY')


// Example equation: a^2 + b^2 == c^2
function pythagoreanEquation(a, b, c) {
    return a * a + b * b === c * c;
}

function anotherEquation(a,b,c,d,e,f){
    return a+b*2+(c+d)*e+(a*b) === f*2
}

const conditionFunction = pythagoreanEquation; // Replace with your condition function
const inputArgs = [3, 4, 5, 6, 8, 10]; // Replace with your input values array
const numVariables = 3; // Replace with the desired number of variables (3 or 4)

const result = pf.findMatchingCombinations(conditionFunction, inputArgs, numVariables);
console.log(`Matching ${numVariables}-variable combinations:`, result);

const cond2 = anotherEquation; // Replace with your condition function
const args = pf.getNumbers(1,20); // Replace with your input values array
const varNums = 5; // Replace with the desired number of variables (3 or 4)

const result2 = pf.findMatchingCombinations(cond2, args, varNums);
console.log(`Matching ${varNums}-variable combinations:`, result2);

const operation = "divide"; // Change this to "sum", "multiply", "factorial", "fibonacci", "subtract", "divide", etc.
const numbers = [10, 2, 2]; // Provide numbers as an array

const recursiveResult = pf.recursiveMathOperation(operation, ...numbers);
console.log(`Result of ${operation}(${numbers.join(", ")}): ${recursiveResult}`);

const nums = [1, 3, 4, 2, 2,3,1,10,10,123,32,72]; // Replace with your input array
const duplicate = pf.findDuplicate(nums);
console.log("Duplicate element:", duplicate);


const dublicateNums = [4, 3, 2, 7, 8, 2, 1, 4]; // Replace with your input array
const duplicateElements = pf.findDuplicateElements(dublicateNums);
console.log("Duplicate elements:", duplicateElements);

const testCases = ["racecar", "Hello", 12321, "A man, a plan, a canal, Panama!"]; // Add more test cases as needed

for (const testCase of testCases) {
    const result = pf.isPalindrome(testCase);
    console.log(`"${testCase}" is a palindrome: ${result}`);
}


const inputArray = pf.shuffleArrayRandom(pf.getNumbers(1,10000)); // Replace with your array of a million integers
const chunkSize = 1000; // Adjust the chunk size as needed

const sortedArray = pf.externalMergeSort(inputArray, chunkSize);
console.log(sortedArray);


const inputList = [9, 4, 6, 2, 7, 4, 3, 9, 1, 15, 10, 12, 8, 17, 14, 13, 9, 1]; // Replace with user's input list
const pivots = [4, 10]; // Add pivot values

const nPartResult = pf.nPartitions(inputList, pivots);
console.log(nPartResult);

const k = 60; // Replace with the desired value of k
const regularNumbers = pf.generateRegularNumbers(k);
console.log("First", k, "regular numbers:", regularNumbers)

const stockPrices = pf.shuffleArrayRandom(pf.getNumbers(1,1000))
const stockResult = pf.maxProfit(stockPrices);
console.log("Maximum profit:", stockResult); // Output: 5

const detialedPrices = pf.shuffleArrayRandom(pf.getNumbers(1,10000))
const detailedResult = pf.maxProfitDetails(detialedPrices);

const summary = pf.summarizeDecisions(detailedResult);
console.log(summary)

const stringArray = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const searchTerm = "an";
const mode = "includes";

try {
    const filteredStrings = pf.filterStringsByTerm(stringArray, searchTerm, mode);
    console.log("Filtered strings:", filteredStrings);
} catch (error) {
    console.error("Error:", error.message);
}