function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const clonedArray = [];
        for (const item of obj) {
            clonedArray.push(deepClone(item));
        }
        return clonedArray;
    }

    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

function shallowClone(obj) {
    if (Array.isArray(obj)) {
        return [...obj]; // Shallow copy for arrays
    } else if (typeof obj === 'object' && obj !== null) {
        return { ...obj }; // Shallow copy for objects
    } else {
        return obj; // Primitive values
    }
}





module.exports = {
    deepClone:deepClone,
    shallowClone:shallowClone
};

