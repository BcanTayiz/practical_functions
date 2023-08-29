const pf = require('practical-functions')



// Example usage:
const inputArray = [1, 2, 3];
const allSubsets = pf.generateSubsets(inputArray);
console.log(allSubsets);

// Example usage:
const inputArray2 = [1, 2, 3, 4];
const subsetLength = 2;
const nLengthSubsets = pf.generateNLengthSubsets(inputArray2, subsetLength);
console.log(nLengthSubsets);

// Example usage:
const inputArray3 = [2, 4, 6, 8];
const targetSum = 10;
const result = pf.subsetsWithSum(inputArray3, targetSum);
console.log(result);

// Example usage:
const inputArrayProduct = [2, 3, 5, 7];
const targetProduct = 30;
const resultProduct = pf.subsetsWithProduct(inputArrayProduct, targetProduct);
console.log(resultProduct);

// Example custom reduction function (sum of squares)
function sumOfSquaresReducer(total, num) {
    return total + num * num;
}

const array = [1, 2, 3, 4, 5];
const resultCustom = pf.customListReducer(array, sumOfSquaresReducer);
console.log(resultCustom); // Outputs: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)

// Example custom reduction function (calculate total price of products)
function totalPriceReducer(total, product) {
    return total + product.price;
}

// Array of products
const products = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 15 },
    { name: 'Product D', price: 25 },
];

// Calculate the total price of products using customListReducer
const totalPrice = pf.customListReducer(products, totalPriceReducer);
console.log('Total Price:', totalPrice); // Outputs: 70 (10 + 20 + 15 + 25)

// Example usage:
const linkData = ['Link 1', 'Link 2', 'Link 3'];
const listData = ['Item 1', 'Item 2', 'Item 3'];

const links = pf.createHTMLElements('a', linkData);
const listItems = pf.createHTMLElements('li', listData);

console.log(links);
console.log(listItems);

// Example usage:
const textToModify = "Hello world, this is a test.";
const replacements = {
    World: "Universe",
    test: "Example",
    hello: "Hi",
    This: "no"
};

const modifiedText = pf.replaceWordsInText(textToModify, replacements, false); // Case-insensitive for both keys and values
const modText2 = pf.replaceWordsInText(textToModify,replacements,true)

console.log(modifiedText); // Output: "Hi Universe, this is a Example."
console.log(modText2)

const exampleText = `In no impression assistance contrasted. Manners she wishing justice hastily new anxious.
 At discovery discourse departure objection we. Few extensive add delighted tolerably sincerity her. 
 Law ought him least enjoy decay one quick court.
 Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.
Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at.
 No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. 
 Discovery sweetness principle discourse shameless bed one excellent. 
 Sentiments of surrounded friendship dispatched connection is he. 
 Me or produce besides hastily up as pleased. Bore less when had and john shed hope.`



const replacements2 = {
    no:'but, yess aam, whatelse ?',
    she:"Angel",
    do:"can be done earlier",
    in:"out",
    produce:"be dj about it",
    principle:"Something I repeat like parrot",
    Angel:"pays bills",
    be:"whatever it will be will be"
};

const modifiedTextLyrics = pf.replaceWordsInText(exampleText, replacements2, false); // Case-insensitive for both keys and values
const modText2Lyrics = pf.replaceWordsInText(modifiedTextLyrics,replacements2,true)
console.log("----------- String 1 Example -----------")
console.log(modifiedTextLyrics); // Output: "Hi Universe, this is a Example."
console.log("----------- String 2 Example -----------")
console.log(modText2Lyrics)


console.log("------- Count Words --------")
console.log(pf.countWords(modText2Lyrics))
console.log("------- Count Words --------")


// Example usage:
const booleanArray = [true, false, true, false];
const resultAND = pf.booleanOperation(booleanArray, "AND");
console.log(`Result of AND operation: ${resultAND}`);

const resultOR = pf.booleanOperation(booleanArray, "OR");
console.log(`Result of OR operation: ${resultOR}`);

// Example usage:
const booleanList = [
    { value: true },
    { operation: 'AND', value: true },
    { operation: 'OR', value: false },
    { operation: 'XOR', value: true },
    { operation: 'NOT', value: true },
  ];
  
  const resultBool = pf.calculateBooleanAlgebra(booleanList);
  console.log(`Result of boolean algebra: ${resultBool}`);

// Example usage:
const fuzzyRules = [
    { variable: 'temperature', membership: [10, 20, 30], value: 'cold' },
    { variable: 'temperature', membership: [20, 30, 40], value: 'warm' },
    { variable: 'temperature', membership: [30, 40, 50], value: 'hot' },
    { variable: 'humidity', membership: [30, 40, 50], value: 'dry' },
    { variable: 'humidity', membership: [40, 50, 60], value: 'moderate' },
    { variable: 'humidity', membership: [50, 60, 70], value: 'humid' },
  ];
  
  const fuzzySystem = pf.createFuzzyLogicSystem(fuzzyRules);
  
  const inputs = {
    temperature: 25,
    humidity: 45,
  };
  
  const resultFuzzy = fuzzySystem.evaluate(inputs);
  console.log(resultFuzzy);
  
  const inputs2 = {
    temperature: 15,
    humidity: 60,
  };
  
  const resultFuzzy2 = fuzzySystem.evaluate(inputs2);
  console.log(resultFuzzy2);

  const inputs3 = {
    temperature: 20,
    humidity: 50,
  };
  
  const resultFuzzy3 = fuzzySystem.evaluate(inputs3);
  console.log(resultFuzzy3);

  // Example usage:
const fuzzySet = { 1: 0.2, 2: 0.5, 3: 0.8 };
const crispValue = pf.centroidDefuzzification(fuzzySet);
console.log(`Crisp Value: ${crispValue}`);



// Example usage:
const setA = { 1: 0.4, 2: 0.7 };
const setB = { 1: 0.8, 2: 0.3 };
const resultFuzzyAnd = pf.fuzzyAND(setA, setB);
console.log(`Fuzzy AND Result: ${JSON.stringify(resultFuzzyAnd)}`);


// Example usage:
const input = 25;
const membershipFunctionParams = {
  cold: [10, 20, 30],
  warm: [20, 30, 40],
  hot: [30, 40, 50],
};
const fuzzyInput = pf.fuzzify(input, membershipFunctionParams);
console.log(`Fuzzy Input: ${JSON.stringify(fuzzyInput)}`);

// Example usage:
const setAOp = { A: 0.4, B: 0.7 };
const setBOp = { A: 0.8, B: 0.3 };
const setCOp = { A: 0.2, B: 0.5 };

const andResult = pf.fuzzyOperation("AND", setAOp, setBOp);
console.log(`AND Result: ${JSON.stringify(andResult)}`);

const orResult = pf.fuzzyOperation("OR", setAOp, setBOp, setCOp);
console.log(`OR Result: ${JSON.stringify(orResult)}`);

const notResult = pf.fuzzyOperation("NOT", setAOp,setAOp,setBOp)
;
console.log(`NOT Result: ${JSON.stringify(notResult)}`);

listOp = [setAOp,setBOp,setCOp,{A:0.9,B:0.2}]

const andResultList = pf.fuzzyOperation("AND", ...listOp);
console.log(`AND Result: ${JSON.stringify(andResultList)}`);