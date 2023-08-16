function findMaxMin(arr,ret='max',n=1) {
    if(!Array.isArray(arr)){
        throw Error('Input must be an array')
    }
    if (arr.length === 0) {
        return { max: undefined, min: undefined };
    }
    

    if(ret == 'max'){
        let sortedMaxArray = arr.slice().sort((a, b) => b - a);
        return sortedMaxArray[n - 1];
    }else if(ret == 'min'){
        let sortedMinArray = arr.slice().sort((a, b) => a - b);
        return sortedMinArray[n - 1];
    }else{
        return []
    }
}


module.exports = {
    findMaxMin:findMaxMin
}