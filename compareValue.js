function hasKeyInObjectsList(objectsList, keyToCheck) {
    return objectsList.every(obj => obj.hasOwnProperty(keyToCheck));
}


function objectSort(arrayObjects,value) {
    if(Array.isArray(arrayObjects) && hasKeyInObjectsList(arrayObjects,value)){
        arrayObjects.sort((a,b) => a[value] - b[value]);
        return arrayObjects
    }else{
        throw Error('The provided values are not correct')
    }
    
  }

function empty(e) {
    if (
        e === "" ||
        e === 0 ||
        e === "0" ||
        e === null ||
        e === false ||
        typeof e === "undefined" ||
        (Array.isArray(e) && e.length === 0) ||
        (typeof e === "object" && Object.keys(e).length === 0)
    ) {
        return true;
    } else {
        return false;
    }
}
  
module.exports = {
    objectSort:objectSort,
    hasKeyInObjectsList:hasKeyInObjectsList,
    valueEmpty:empty
};