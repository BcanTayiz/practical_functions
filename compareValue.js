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

function multipleConditions(array1,array2){
    if(!Array.isArray(array1) || !Array.isArray(array2) ){
        throw Error('Values must be type of array')
    }
    let cond = true
    for(let i=0;i<array1.length;i++){
        if(array1.length > array2.length){
            if(i > array2.length -1){
                break
            }
           
        }else{
            if(i > array1.length -1){
                break
            }
        }

        if(array1[i] != array2[i]){
            cond = false
        }
        
    }

    return cond
}

function getType(val){
    return typeof(val)
}



  
module.exports = {
    objectSort:objectSort,
    hasKeyInObjectsList:hasKeyInObjectsList,
    valueEmpty:empty,
    multipleConditions:multipleConditions,
    getType:getType,
};