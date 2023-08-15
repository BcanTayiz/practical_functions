function substring(str1,str2){
if(typeof(str1) != 'string' || typeof(str2) == 'string'){
    throw Error('Values are not string')
}
return str1.includes(str2)
}



module.exports = {
    substring:substring
};