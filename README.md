# Practicle Js

# Usage of Functions

<pre>
```
const pracicle_js = require('practicale_js')

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

console.log(pracicle_js.checkValue(list,[4,5]))
console.log(pracicle_js.modulerCheck(list,[1,2,3]))
console.log(pracicle_js.deleteValues(list,[1,2,3]))
console.log(pracicle_js.deleteValues(object,['a','b']))

console.log(pracicle_js.simpleValidateEmail('asdasd@index.com'))
console.log(pracicle_js.createRandomUuid4())
console.log(pracicle_js.objectSort(objectsList,'age'))
console.log(pracicle_js.hasKeyInObjectsList(objectsList,'name'))

console.log(pracicle_js.valueEmpty('0'))
console.log(pracicle_js.valueEmpty([]))
console.log(pracicle_js.deepClone(originalObject))

console.log(pracicle_js.checkValue(originalObject,'John'))
console.log(pracicle_js.transformBoolean('true'))

const currentDate = new Date();
console.log(pracicle_js.dateToString(currentDate, 'tr-TR', 'day-month-year', '/'));
console.log(pracicle_js.dateToString(currentDate, 'tr-TR', 'month-year', '-'));
console.log(pracicle_js.dateToString(currentDate, 'tr-TR', 'month-day', '.'));

const originalString = 'This is an example string that we want to split into multiple lines based on word count.';
const wordCount = 5;
const multiLineHTML = pracicle_js.convertToMultilineHTML(originalString, wordCount);
console.log(multiLineHTML)

const jsonData = {
    name: 'John',
                                            age: 30,
                        city: 'New York',
    great:{
        values:[1,2,3,4,      5,2,3,],mean:{'a':4,'b':5}
    }
};
console.log(pracicle_js.prettifierJson(jsonData))


console.log(pracicle_js.checkArray({'a':1,'b':2,'c':3}))

const objList = [
    { key1: 'value1', key2: 'value2' },
    { key3: 'value3', key4: 'value4' }
];

console.log(pracicle_js.mergeObjects(objList))
console.log(pracicle_js.objectLength(pracicle_js.mergeObjects(objList)))

async function main() {
    try {
        const result = await pracicle_js.fileToArray(['text.txt', 'text2.txt']);
        console.log(result);
    } catch (error) {
        console.error('Hata:', error);
    }
}

main();

var d1 = new Date();
var d2 = new Date(d1);

console.log(pracicle_js.checkDates(d1,d2),'CHECK DATES')

// usage example:
var a = ['a', 1, 'a', 2, '1'];
console.log(pracicle_js.filterUnique(a,true,false))
console.log(pracicle_js.filterUnique(a,false,false))
console.log(pracicle_js.filterUnique(a,true,true))
console.log(pracicle_js.filterUnique(a,false,true))


console.log(pracicle_js.multipleConditions([1,2,3,4,5],[1,2,3,4,5]),'MULTIPLE CONDITIONS')

console.log(pracicle_js.numberWithCommas(10000000000),'NUMBER WITH COMMAS')



console.log(pracicle_js.isNumeric(100.23123),'IS NUMERIC?')
console.log(pracicle_js.isNumeric('1000.1239239'),'IS NUMERIC?')
console.log(pracicle_js.isNumeric('10230.sasdasd'),'IS NUMERIC?')


console.log(pracicle_js.randomRange(20,30),'RANDOM RANGE')
console.log(pracicle_js.randomRange(20,30,3),'RANDOM RANGE')
console.log(pracicle_js.randomRange(20,30,5),'RANDOM RANGE')

console.log(pracicle_js.isNumeric(100.23123,true),'IS NUMERIC?')
console.log(pracicle_js.isNumeric('1000.1239239',true),'IS NUMERIC?')
console.log(pracicle_js.isNumeric('10230.sasdasd',true),'IS NUMERIC?')

console.log(pracicle_js.getNumbers(2,10,3),'GET NUMBERS')
console.log(pracicle_js.getNumbers(10,1,-3),'GET NUMBERS')

var d1 = new Date();
console.log(pracicle_js.isValidDate(d1),'VAL DATE')
console.log(pracicle_js.isValidDate('10.1.2020'),'VAL DATE')
console.log(pracicle_js.isValidDate('10-20-300'),'VAL DATE')


console.log(pracicle_js.shuffleArrayRandom([1,2,4,123,4,5,2,100]),'SHUFFLE ARRAY')

console.log(pracicle_js.createObjectFromLists([1,2,3,4,5,6],[1,2,3]),'OBJECT FROM LISTS')
console.log(pracicle_js.createObjectFromLists([1,2],[1,2,3]),'OBJECT FROM LISTS')

let objValue = {'a':1,'b':2,'c':3}
console.log(pracicle_js.alterObjectValues(objValue,'sum',4),'ALTER OBJECT VALUES')
console.log(pracicle_js.alterObjectValues(objValue,'multiply',4),'ALTER OBJECT VALUES')
console.log(pracicle_js.alterObjectValues(objValue,'divide',4),'ALTER OBJECT VALUES')
console.log(pracicle_js.alterObjectValues(objValue,'substract',4),'ALTER OBJECT VALUES')

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(pracicle_js.listReducer(array,'sum'),'listReducer VALUES')
console.log(pracicle_js.listReducer(array,'multiply'),'listReducer VALUES')
console.log(pracicle_js.listReducer(array,'divide'),'listReducer VALUES')
console.log(pracicle_js.listReducer(array,'substract'),'listReducer VALUES')

const lol = () => {
    console.log('ha')
}

console.log(pracicle_js.getType('a'))
console.log(pracicle_js.getType(123))
console.log(pracicle_js.getType(lol))
console.log(pracicle_js.getType(array))


const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomItems = pracicle_js.getRandomItemsFromArray(originalArray, 3);
console.log(randomItems);


var hello = "Hello World";
console.log(pracicle_js.replaceAt(hello,2,'!!'))


console.log(pracicle_js.swapArrayElements(originalArray,2,4),'SWAP ELEMENTS')
console.log(pracicle_js.swapArrayElements(originalArray,0,9),'SWAP ELEMENTS')

console.log(pracicle_js.compareLists([1,2,3,4],[1,2,3]))


console.log(pracicle_js.findMaxMin([12,3,4,123,4,5234,3,44],'max',1),'RETURN MAX MIN')
console.log(pracicle_js.findMaxMin([12,3,4,123,4,5234,3,44],'min',1),'RETURN MAX MIN')
console.log(pracicle_js.findMaxMin([12,3,4,123,4,5234,3,44],'max',3),'RETURN MAX MIN')
console.log(pracicle_js.findMaxMin([12,3,4,123,4,5234,3,44],'min',3),'RETURN MAX MIN')


```
</pre>


* You can check the code from github
* code is made to simplfy the steps on javascript
* I will update the code and function when I find new problems
* Project is open source


