const checkValue = require('./checkValue');
const stringCompare = require('./stringCompare')
const deleteValues = require('./deleteValues')
const simpleValidateEmail = require('./validateEmail')
const createRandomUuid4 = require('./uuidCreate')
const compare = require('./compareValue')
const deepClone = require('./cloneObject')
const transform = require('./transform')

module.exports = {
    checkValue: checkValue.checkValue,
    modulerCheck: checkValue.modulerCheck,
    substring: stringCompare.substring,
    deleteValues: deleteValues.deleteValues,
    simpleValidateEmail: simpleValidateEmail.simpleValidateEmail,
    createRandomUuid4: createRandomUuid4.createRandomUuid4,
    objectSort:compare.objectSort,
    hasKeyInObjectsList:compare.hasKeyInObjectsList,
    valueEmpty:compare.valueEmpty,
    deepClone:deepClone.deepClone,
    transformBoolean:transform.transformBoolean,
    dateToString:transform.dateToString,
};