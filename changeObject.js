function alterObjectValues(object,alter='sum',val){
    if(typeof(object) !== 'object'){
        throw Error('Value must be object')
    }
    if(alter == 'sum'){
        Object.keys(object).forEach(function(key, index) {
            object[key] += val;
          }); 
    }else if(alter == 'multiply'){
        Object.keys(object).forEach(function(key, index) {
            object[key] *= val;
          }); 
    }else if(alter == 'divide'){
        Object.keys(object).forEach(function(key, index) {
            object[key] /= val;
          }); 
    }else if(alter == 'substract'){
        Object.keys(object).forEach(function(key, index) {
            object[key] -= val;
          });
    }
    
    return object
}

module.exports = {
    alterObjectValues:alterObjectValues
}