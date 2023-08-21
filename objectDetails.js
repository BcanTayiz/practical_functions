function getObjectDetails(obj, depth = 0) {
    if (typeof obj !== 'object' || obj === null) {
      return `Not an object (Depth: ${depth})`;
    }
  
    const details = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        let valueDetails = '';
  
        if (Array.isArray(value)) {
          // For arrays, include length, type, and values
          valueDetails = `Array (Length: ${value.length})\n${value.map(item => getObjectDetails(item, depth + 1)).join('\n')}`;
        } else if (typeof value === 'object' && value !== null) {
          // For nested objects, recursively call getObjectDetails
          valueDetails = getObjectDetails(value, depth + 1);
        } else {
          // For non-arrays and non-objects, include value and its type
          valueDetails = `${value} (${typeof value})`;
        }
  
        details.push(`${key}: ${valueDetails}`);
      }
    }
  
    const objectStructure = Array.isArray(obj) ? 'Array' : 'Object';
    return `${objectStructure} (Depth: ${depth}):\n${details.join('\n')}`;
  }

 

  
module.exports = {
    getObjectDetails:getObjectDetails
}