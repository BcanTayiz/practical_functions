const pf = require('practical-functions')

const originalArray = [1, 2, 3, 2, 4, 5, 2];
const valueToDelete = 2;

const newArray = pf.deleteAllMatching(originalArray, valueToDelete);

console.log(newArray); // Output: [1, 3, 4, 5]

const originalArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
const lowerBound = 3;
const upperBound = 6;

const newArray2 = pf.deleteValuesOutOfRange(originalArray2, lowerBound, upperBound);

console.log(newArray2); // Output: [3, 4, 5, 6]

const existingData = [
    { id: 1, age: 30 },
    { id: 2, age: 25 },
  ];
  
  const objects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  
  const selectedKeys = ['name'];
  
  const enrichedObjects = pf.enrichObjSelData(existingData, objects, selectedKeys);
  
  console.log(enrichedObjects);


  const existingData2 = [
    { id: 1, age: 30 },
    { id: 2, age: 25 },
    { id: 3, age: 40 },
    { id: 4, age: 100},
    { id: 10, age:64}
  ];
  
  const objects2 = [
    { id: 1, name: 'Alice', title: 'Prof' },
    { id: 2, name: 'Bob', title: 'Dr' },
    { id: 3, name: 'Charlie', title: 'Colonel' },
  ];
  
  const selectedKeys2 = ['name','title'];
  
  const enrichedObjects2 = pf.enrichObjSelData(existingData2, objects2, selectedKeys2);
  
  console.log(enrichedObjects2);

  const templateObjects = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
  ];
  
  const n = 3;
  
  const populatedObjects = pf.populateListOfObj(templateObjects, n);
  
  console.log(populatedObjects);

// Example usage:
const htmlContent = '<html><body><h1>Hello, World!</h1></body></html>';
const folderName = 'screenshots'; // Specify the desired folder name
const fileName = 'screenshot.png'; // Specify the desired file name and extension
pf.logHTMLVisual(htmlContent, folderName, fileName);

// Example usage:
const htmlContentNew = '<html><body><h1>Hello, World!</h1></body></html>';
pf.openHTMLInBrowser(htmlContentNew);