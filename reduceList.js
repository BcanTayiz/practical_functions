function listReducer(array, op = 'sum') {
    if (!Array.isArray(array)) {
        throw Error('First value must be an array');
    }

    if (op === 'sum') {
        array = array.reduce((val, a) => val + a, 0);
    } else if (op === 'multiply') {
        array = array.reduce((val, a) => val * a, 1); // Başlangıç değeri 1
    } else if (op === 'divide') {
        array = array.reduce((val, a) => val / a, 1); // Başlangıç değeri 1
    } else if (op === 'substract') {
        array = array.reduce((val, a) => val - a);
    } else {
        throw Error('Invalid operation');
    }

    return array;
}

function customListReducer(array, reducerFn) {
    if (!Array.isArray(array)) {
        throw Error('First value must be an array');
    }
    if (typeof reducerFn !== 'function') {
        throw Error('Second value must be a reducer function');
    }
    return array.reduce(reducerFn, 0); // Initialize with 0
}




module.exports ={
    listReducer:listReducer,
    customListReducer:customListReducer,
}