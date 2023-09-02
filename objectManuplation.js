function extractValuesByKeys(arrayOfObjects, keys) {
    if (!Array.isArray(keys) || keys.length === 0) {
      return [];
    }
  
    if (keys.length === 1) {
      const key = keys[0];
      return arrayOfObjects
        .filter(obj => obj.hasOwnProperty(key))
        .map(obj => obj[key]);
    }
  
    const valuesLists = keys.map(key => {
      return arrayOfObjects
        .filter(obj => obj.hasOwnProperty(key))
        .map(obj => obj[key]);
    });
  
    return valuesLists;
  }
  
 
  
  
  
  
  

  module.exports = {
    extractValuesByKeys:extractValuesByKeys
  }