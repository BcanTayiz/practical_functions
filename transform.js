function transformBoolean(val){
    var boolVal = (String(val).toLowerCase() === 'true');
    return boolVal
}



module.exports = {
    transformBoolean:transformBoolean
};