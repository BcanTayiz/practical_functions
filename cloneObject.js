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




module.exports = {
    deepClone:deepClone
};

