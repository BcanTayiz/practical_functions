function mergeObjects(listOfObjects){
    let mergedObj = {}
    if(!Array.isArray(listOfObjects)){
        throw Error('Value must be list of objects')
    }
    listOfObjects.forEach(element => {
        if(typeof(element) !== 'object'){
            throw Error('list includes non-object variable')
        }else{
            mergedObj = { ...mergedObj, ...element };
        }
    });

    return mergedObj
}

function createObjectFromLists(array1,array2){
    if(!Array.isArray(array1) || !Array.isArray(array2)){
        throw Error('Objects should be an array')
    }

    obj = {}
    if(array1.length > array2.length){
        for(let i=0;i<array2.length;i++){
            obj[array1[i]] = array2[i]
        }
    }else{
        for(let i=0;i<array1.length;i++){
            obj[array1[i]] = array2[i]
        } 
    }
    
    return obj
}


module.exports = {
    mergeObjects:mergeObjects,
    createObjectFromLists:createObjectFromLists
};