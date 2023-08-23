function alterObjectValues(object,alter='sum',val){
    if(typeof(object) !== 'object'){
        throw Error('Value must be object')
    }
    if(alter == 'sum'){
        Object.keys(object).forEach(function(key, index) {
            object[key] += val;
          }); 
    }else if(alter == 'multiply'){
        Object.keys(object).forEach(function(key, index) {
            object[key] *= val;
          }); 
    }else if(alter == 'divide'){
        Object.keys(object).forEach(function(key, index) {
            object[key] /= val;
          }); 
    }else if(alter == 'substract'){
        Object.keys(object).forEach(function(key, index) {
            object[key] -= val;
          });
    }
    
    return object
}

function exponentiateObjectValues(object, exponent) {
    if (typeof object !== 'object') {
        throw Error('Value must be object');
    }

    Object.keys(object).forEach(function (key) {
        object[key] = Math.pow(object[key], exponent);
    });

    return object;
}


function absoluteObjectValues(object) {
    if (typeof object !== 'object') {
        throw Error('Value must be object');
    }

    Object.keys(object).forEach(function (key) {
        if (typeof object[key] === 'number') {
            object[key] = Math.abs(object[key]);
        }
    });

    return object;
}

function roundObjectValues(object, decimals) {
    if (typeof object !== 'object') {
        throw Error('Value must be object');
    }

    Object.keys(object).forEach(function (key) {
        if (typeof object[key] === 'number') {
            object[key] = Number(object[key].toFixed(decimals));
        }
    });

    return object;
}

function concatenateObjectValues(object, concatString) {
    if (typeof object !== 'object') {
        throw Error('Value must be object');
    }

    Object.keys(object).forEach(function (key) {
        if (typeof object[key] === 'string') {
            object[key] += concatString;
        }
    });

    return object;
}

function extractNumObjList(listOfObjects, keyToExtractFrom) {
    if (!Array.isArray(listOfObjects)) {
        throw Error('Input must be an array of objects');
    }

    // Loop through each object in the list
    listOfObjects.forEach(function (object) {
        if (typeof object !== 'object') {
            throw Error('Each element in the array must be an object');
        }

        // Ensure the key exists in the object
        if (object.hasOwnProperty(keyToExtractFrom)) {
            const value = object[keyToExtractFrom];

            if (typeof value === 'string') {
                // Use a regular expression to extract numeric values
                const numericValues = value.match(/\d+/g);

                // Convert the matched values to numbers
                if (numericValues) {
                    object[keyToExtractFrom] = numericValues.map(val => parseInt(val));
                } else {
                    object[keyToExtractFrom] = [];
                }
            }
        }
    });

    return listOfObjects;
}

function reduceValObjList(listOfObjects, keyToOperateOn, reductionFunction) {
    if (!Array.isArray(listOfObjects)) {
        throw Error('Input must be an array of objects');
    }

    // Loop through each object in the list
    return listOfObjects.map(function (object) {
        if (typeof object !== 'object') {
            throw Error('Each element in the array must be an object');
        }

        // Ensure the key exists in the object and contains a list of numbers
        if (object.hasOwnProperty(keyToOperateOn) && Array.isArray(object[keyToOperateOn])) {
            // Apply the reduction function to the list of numbers
            const reducedValue = reductionFunction(object[keyToOperateOn]);

            // Create a new object with the reduced value
            const newObj = Object.assign({}, object);
            newObj[keyToOperateOn] = reducedValue;
            return newObj;
        } else {
            // If the key does not exist or is not a list of numbers, return the original object
            return object;
        }
    });
}


function changeKeyValues(list, keyToChange, newValue) {
    if (!Array.isArray(list)) {
        throw new Error('Input is not an array');
    }

    const updatedList = list.map((item) => {
        if (typeof item === 'object' && item !== null && keyToChange in item) {
            // Create a new object with the updated key
            const newItem = { ...item };
            newItem[newValue] = newItem[keyToChange];
            delete newItem[keyToChange];
            return newItem;
        } else {
            return item;
        }
    });

    return updatedList;
}



module.exports = {
    alterObjectValues:alterObjectValues,
    exponentiateObjectValues:exponentiateObjectValues,
    absoluteObjectValues:absoluteObjectValues,
    roundObjectValues:roundObjectValues,
    concatenateObjectValues:concatenateObjectValues,
    extractNumObjList:extractNumObjList,
    reduceValObjList:reduceValObjList,
    changeKeyValues:changeKeyValues
}