function replaceAt(string,index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}



module.exports = {
    replaceAt:replaceAt
}