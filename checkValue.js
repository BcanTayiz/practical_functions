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

const array = [1, 2, 3, 4, 5];
const object = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming']
};

console.log(checkValue(array, 3)); // true
console.log(checkValue(array, 6)); // false
console.log(checkValue(object, 'John')); // true
console.log(checkValue(object, 'Alice')); // false


function modulerCheck(array,value){
    if(!Array.isArray(array)){
        throw Error('First value must be an array')
    }
    if (Array.isArray(value)){
        return array.some(item2 => value.some(item1 => item1 % item2 === 0));
    }
    return array.some(item2 => item2 % value === 0)
}




module.exports = {
    checkValue: checkValue,
    modulerCheck: modulerCheck
};