function deleteValues(object,value){
    if(Array.isArray(object)){
        if(Array.isArray(value)){
            return object.filter(item1 => !value.includes(item1));
        }else{
           let newArray = array.filter(item => item != value)
           return newArray
        }
        
    }else{
        if(typeof(object) == 'object'){
            try{
                if(Array.isArray(value)){
                    value.forEach(key => {
                        delete object[key];
                    });
                    return object
                }else{
                    delete object[value]
                    return object
                }
            }catch(error){
                throw Error(error)
            }
            
        }
    }
    
    
}

function removeDuplicatesByKey(arr, key) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }

    const seenValues = {};
    const newArr = [];

    for (const obj of arr) {
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            throw new Error('Array elements must be objects.');
        }

        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (!seenValues[value]) {
                seenValues[value] = true;
                newArr.push(obj);
            }
        } else {
            newArr.push(obj);
        }
    }

    return newArr;
}

function deleteAllMatching(arr, valueToDelete) {
    return arr.filter(item => item !== valueToDelete);
  }

function deleteValuesOutOfRange(arr, lowerBound, upperBound) {
return arr.filter(item => item >= lowerBound && item <= upperBound);
}



module.exports = {
    deleteValues:deleteValues,
    removeDuplicatesByKey:removeDuplicatesByKey,
    deleteAllMatching:deleteAllMatching,
    deleteValuesOutOfRange:deleteValuesOutOfRange
};