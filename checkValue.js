function checkValue(arrayOrObject, value) {
    if (Array.isArray(arrayOrObject)) {
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                if (!arrayOrObject.includes(value[i])) {
                    return false;
                }
            }
            return true;
        }
        return arrayOrObject.includes(value);
    } else if (typeof arrayOrObject === 'object') {
        for (const key in arrayOrObject) {
            if (arrayOrObject.hasOwnProperty(key) && arrayOrObject[key] === value) {
                return true;
            }
        }
        return false;
    } else {
        throw new Error('Invalid input');
    }
}

function modulerCheck(array,value){
    if(!Array.isArray(array)){
        throw Error('First value must be an array')
    }
    if (Array.isArray(value)){
        return array.some(item2 => value.some(item1 => item1 % item2 === 0));
    }
    return array.some(item2 => item2 % value === 0)
}


function checkArray(array){
    return Array.isArray(array)
}

function objectLength(obj){
    if(typeof obj != 'object'){
        throw Error('Variable is not an object')
    }
    return Object.keys(obj).length
}


function checkDates(date1,date2){
    if(date1 instanceof Date && date2 instanceof Date ){
        return date1.getTime() == date2.getTime()
    }else{
        throw Error('Values should be instance of Date')
    }
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

function isNumeric(n,returnValue=false) {
    if(typeof(n) == 'string')
    {
        try{
            n = parseInt(numericString); // Converts to integer
        }catch{

        }
        try{
            n = parseFloat(decimalString); // Converts to floating-point
        }catch{

        }
    }
    if(returnValue && !isNaN(parseFloat(n)) && isFinite(n)){
        return n
    }
    return !isNaN(parseFloat(n)) && isFinite(n);
}




module.exports = {
    checkValue: checkValue,
    modulerCheck: modulerCheck,
    checkArray:checkArray,
    objectLength:objectLength,
    checkDates:checkDates,
    isNumeric:isNumeric,
    isValidDate:isValidDate
};