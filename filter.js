function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}
  
function filterUnique(array, sorted = true, asc = true) {
    if (!Array.isArray(array)) {
        throw new Error('Value must be an array');
    }

    const uniqueArray = array.filter(onlyUnique);

    if (sorted) {
        uniqueArray.sort();
        if (!asc) {
            uniqueArray.reverse();
        }
    }

    return uniqueArray;
}

function compareLists(array1,array2,op="intersection") {
    if(!Array.isArray(array1) || !Array.isArray(array2) ){
        throw Error('Inputs must be array')
    }

    if(op == 'intersection'){
        let intersection = array1.filter(x => array2.includes(x));
        return intersection
    }else if(op == 'difference'){
        let difference = array1.filter(x => !array2.includes(x));
        return difference
    }else if(op == 'symdifference'){
        let symDifference = array1
                 .filter(x => !array2.includes(x))
                 .concat(arr2.filter(x => !array1.includes(x)));
        return symDifference
    }else{
        return []
    }
}




module.exports = {
    filterUnique: filterUnique,
    compareLists:compareLists,
};
