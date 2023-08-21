const checkValue = require('./checkValue');
const stringCompare = require('./stringCompare')
const deleteValues = require('./deleteValues')
const validateEmail = require('./validateEmail')
const createRandomUuid4 = require('./uuidCreate')
const compare = require('./compareValue')
const deepClone = require('./cloneObject')
const transform = require('./transform')
const aggregate = require('./aggregate')
const fileToArray = require('./saveFilesAsync')
const idCreate = require('./idCreate')
const filter = require('./filter')
const randomGen = require('./randomNumber')
const generateNumbers = require('./generateNumbers')
const changeObjects = require('./changeObject')
const reduceList = require('./reduceList')
const stringManuplation = require('./stringManuplation')
const arrayManuplation = require('./arrayManuplation')
const maxMin = require('./minMax')
const mathFormula = require('./mathFormula')
const recursiveMath = require('./recursive')
const duplicate = require('./duplicate')
const palindrome = require('./isPalindrome')
const sorting = require('./sorting')
const regularNumbers = require('./regularNumber')
const profit = require('./profit')
const stringSearch = require('./stringSearch')
const mathPractical = require('./mathPractical')
const cssFilter = require('./cssFilter')
const date = require('./date')
const scale = require('./scale')
const generateRect = require('./generateRect')
const normalize = require('./normalize')
const dividers = require('./dividers')
const convertMemory = require('./convertMemory')
const changeFolder = require('./changeFolder')
const generateString = require('./stringGenerate')
const compress = require('./compression')
const calculateEntropy = require('./calculateEntropy')
const mathOperations = require('./mathOperations')
const measureError = require('./measureError')
const matrix = require('./matrix')
const correlation = require('./correlation')
const randomData = require('./randomData')
const stringMatch = require('./textMatch')
const stringInformal = require('./stringInformal')
const benchmark = require('./benchmark')
const changeImage = require('./changeImage')
const password = require('./password')
const countLines = require('./countLines')

module.exports = {
    checkValue: checkValue.checkValue,
    modulerCheck: checkValue.modulerCheck,
    checkArray:checkValue.checkArray,
    objectLength:checkValue.objectLength,
    checkDates:checkValue.checkDates,
    isNumeric:checkValue.isNumeric,
    isValidDate:checkValue.isValidDate,
    filterUnique:filter.filterUnique,
    compareLists:filter.compareLists,
    substring: stringCompare.substring,
    deleteValues: deleteValues.deleteValues,
    removeDuplicatesByKey:deleteValues.removeDuplicatesByKey,
    validateEmail: validateEmail.validateEmail,
    createRandomUuid4: createRandomUuid4.createRandomUuid4,
    objectSort:compare.objectSort,
    hasKeyInObjectsList:compare.hasKeyInObjectsList,
    valueEmpty:compare.valueEmpty,
    multipleConditions:compare.multipleConditions,
    getType:compare.getType,
    deepClone:deepClone.deepClone,
    transformBoolean:transform.transformBoolean,
    dateToString:transform.dateToString,
    convertToMultilineHTML:transform.convertToMultilineHTML,
    numberWithCommas:transform.numberWithCommas,
    prettifierJson: transform.prettifierJson,
    mergeObjects:aggregate.mergeObjects,
    createObjectFromLists:aggregate.createObjectFromLists,
    combineAndFlattenLists:aggregate.combineAndFlattenLists,
    fileToArray:fileToArray.filesToArray,
    makeid:idCreate.makeid,
    randomRange:randomGen.randomRange,
    shuffleArrayRandom:randomGen.shuffleArrayRandom,
    getRandomItemsFromArray:randomGen.getRandomItemsFromArray,
    createRandomList:randomGen.createRandomList,
    getNumbers:generateNumbers.getNumbers,
    alterObjectValues:changeObjects.alterObjectValues,
    listReducer : reduceList.listReducer,
    replaceAt:stringManuplation.replaceAt,
    filterStringsByTerm:stringSearch.filterStringsByTerm,
    swapArrayElements:arrayManuplation.swapArrayElements,
    findMaxMin:maxMin.findMaxMin,
    findMatchingCombinations:mathFormula.findMatchingCombinations,
    recursiveMathOperation:recursiveMath.recursiveMathOperation,
    findDuplicate:duplicate.findDuplicate,
    findDuplicateElements:duplicate.findDuplicateElements,
    isPalindrome:palindrome.isPalindrome,
    externalMergeSort:sorting.externalMergeSort,
    nPartitions:sorting.nPartitions,
    generateRegularNumbers:regularNumbers.generateRegularNumbers,
    maxProfit:profit.maxProfit,
    maxProfitDetails:profit.maxProfitDetails,
    summarizeDecisions:profit.summarizeDecisions,
    calculatePi:mathPractical.calculatePi,
    calculateArea:mathPractical.calculateArea,
    calculateEulerNum:mathPractical.calculateEulerNum,
    calculateTriFieldAngle:mathPractical.calculateTriFieldAngle,
    removeZeros:mathPractical.removeZeros,
    logBase:mathPractical.logBase,
    roundX:mathPractical.roundX,
    customPad:mathPractical.customPad,
    toDegrees:mathPractical.toDegrees,
    toRadians:mathPractical.toRadians,
    makePercentage:mathPractical.makePercentage,
    parseFormula:mathPractical.parseFormula,
    modifyValues:mathPractical.modifyValues,
    getIndividualDigits:mathPractical.getIndividualDigits,
    sumAndFixDecimal:mathPractical.sumAndFixDecimal,
    gcd:mathPractical.gcd,
    divEqParts:mathPractical.divEqParts,
    genRandPointCircle:mathPractical.genRandPointCircle,
    findLCMOfArray:mathPractical.findLCMOfArray,
    performArrayOperation:mathOperations.performArrayOperation,
    polygonArea:mathOperations.polygonArea,
    moduleNegative:mathOperations.moduleNegative,
    findRoot:mathOperations.findRoot,
    createMatrixFromArray:matrix.createMatrixFromArray,
    prettyPrintMatrix:matrix.prettyPrintMatrix,
    createTableFromMatrix:matrix.createTableFromMatrix,
    addMatrices:matrix.addMatrices,
    subtractMatrices:matrix.subtractMatrices,
    multiplyMatrices:matrix.multiplyMatrices,
    transposeMatrix:matrix.transposeMatrix,
    calculateCorrelationMatrix:correlation.calculateCorrelationMatrix,
    getRecolorFilter:cssFilter.getRecolorFilter,
    getMixColor:cssFilter.getMixColor,
    getDateOfWeek:date.getDateOfWeek,
    calculateYScaleMax:scale.calculateYScaleMax,
    genNonOverLapRect:generateRect.genNonOverLapRect,
    normalizeList:normalize.normalizeList,
    findNDividers:dividers.findNDividers,
    convertMemory:convertMemory.convertMemory,
    changeFileExtension:changeFolder.changeFileExtension,
    generateRandomString:generateString.generateRandomString,
    customCompress:compress.customCompress,
    customDecompress:compress.customDecompress,
    calculateEntropy:calculateEntropy.calculateEntropy,
    meanSquaredError:measureError.meanSquaredError,
    rootMeanSquaredError:measureError.rootMeanSquaredError,
    relativeSquaredError:measureError.relativeSquaredError,
    meanAbsoluteError:measureError.meanAbsoluteError,
    coefficientOfDetermination:measureError.coefficientOfDetermination,
    meanAbsolutePercentageError:measureError.meanAbsolutePercentageError,
    meanPercentageError:measureError.meanPercentageError,
    meanBiasDeviation:measureError.meanBiasDeviation,
    confusionMatrix:measureError.confusionMatrix,
    genRanUserList:randomData.genRanUserList,
    genRandProductList:randomData.genRandProductList,
    genRandEmailList:randomData.genRandEmailList,
    genRandomOrder:randomData.genRandomOrder,
    genRandomEvent:randomData.genRandomEvent,
    genRandUserObjList:randomData.genRandUserObjList,
    genRandEventObjList:randomData.genRandEventObjList,
    genRandDateObjList:randomData.genRandDateObjList,
    genRandEmailObjList:randomData.genRandEmailObjList,
    findMostSimilarText:stringMatch.findMostSimilarText,
    findMostSimDetailed:stringMatch.findMostSimDetailed,
    detectNaiveInformality:stringInformal.detectNaiveInformality,
    findFastFunc:benchmark.findFastFunc,
    convertImagesInFolder:changeImage.convertImagesInFolder,
    generateRandomPassword:password.generateRandomPassword,
    checkPasswordStrength:password.checkPasswordStrength,
    validatePasswordPolicy:password.validatePasswordPolicy,
    countLinesInFolder:countLines.countLinesInFolder
};



