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
const objectDetail = require('./objectDetails')
const scientificTransform = require('./scientificTransform')
const generateDist = require('./generateDist')
const basicExpense = require('./basicExpense')
const primeNumbers = require('./primeNumbers')
const readMeView = require('./readMe')
const search = require('./search')
const fileTransform = require('./fileTransform')
const arrayCreation = require('./arrayCreation')
const count = require('./count')
const similarity = require('./similarity')
const weirdPrediction = require('./weirdPrediction')

module.exports = {
    checkValue: checkValue.checkValue,
    modulerCheck: checkValue.modulerCheck,
    checkArray:checkValue.checkArray,
    objectLength:checkValue.objectLength,
    checkDates:checkValue.checkDates,
    isNumeric:checkValue.isNumeric,
    isValidDate:checkValue.isValidDate,
    isEmptyObject:checkValue.isEmptyObject,
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
    countMatchesInText:count.countMatchesInText,
    countSelectedValues:count.countSelectedValues,
    countValuesInBins:count.countValuesInBins,
    deepClone:deepClone.deepClone,
    shallowClone:deepClone.shallowClone,
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
    exponentiateObjectValues:changeObjects.exponentiateObjectValues,
    absoluteObjectValues:changeObjects.absoluteObjectValues,
    roundObjectValues:changeObjects.roundObjectValues,
    concatenateObjectValues:changeObjects.concatenateObjectValues,
    extractNumObjList:changeObjects.extractNumObjList,
    reduceValObjList:changeObjects.reduceValObjList,
    changeKeyValues:changeObjects.changeKeyValues,
    listReducer : reduceList.listReducer,
    replaceAt:stringManuplation.replaceAt,
    filterStringsByTerm:stringSearch.filterStringsByTerm,
    swapArrayElements:arrayManuplation.swapArrayElements,
    rotateArray:arrayManuplation.rotateArray,
    chunkArray:arrayManuplation.chunkArray,
    arrayToMatrix:arrayManuplation.arrayToMatrix,
    flattenArray:arrayManuplation.flattenArray,
    createArrayWithValues:arrayCreation.createArrayWithValues,
    createArrayWithValues:arrayCreation.createArrayWithValues,
    createRandomArray:arrayCreation.createRandomArray,
    createArrayWithRepeatedValue:arrayCreation.createArrayWithRepeatedValue,
    createBooleanArray:arrayCreation.createBooleanArray,
    createEmptyArray:arrayCreation.createEmptyArray,
    createDateArray:arrayCreation.createDateArray,
    create2DArray:arrayCreation.create2DArray,
    createSubarrays:arrayCreation.createSubarrays,
    createBinsFromArray:arrayCreation.createBinsFromArray,
    createRandomArrayFromList:arrayCreation.createRandomArrayFromList,
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
    performMathOperationsBatch:mathOperations.performMathOperationsBatch,
    performMathOperation:mathOperations.performMathOperation,
    createMatrixFromArray:matrix.createMatrixFromArray,
    prettyPrintMatrix:matrix.prettyPrintMatrix,
    createTableFromMatrix:matrix.createTableFromMatrix,
    addMatrices:matrix.addMatrices,
    subtractMatrices:matrix.subtractMatrices,
    multiplyMatrices:matrix.multiplyMatrices,
    transposeMatrix:matrix.transposeMatrix,
    normalizeMatrix:matrix.normalizeMatrix,
    createIdentityMatrix:matrix.createIdentityMatrix,
    isConverged:matrix.isConverged,
    createRotationMatrix:matrix.createRotationMatrix,
    calEigenValVec:matrix.calEigenValVec,
    computeRotationAngle:matrix.computeRotationAngle,
    isSymmetric:matrix.isSymmetric,
    calculateCorrelationMatrix:correlation.calculateCorrelationMatrix,
    calculateCorrelationCoefficient:correlation.calculateCorrelationCoefficient,
    getRecolorFilter:cssFilter.getRecolorFilter,
    getMixColor:cssFilter.getMixColor,
    getDateOfWeek:date.getDateOfWeek,
    calculateYScaleMax:scale.calculateYScaleMax,
    genNonOverLapRect:generateRect.genNonOverLapRect,
    normalizeList:normalize.normalizeList,
    findNDividers:dividers.findNDividers,
    convertMemory:convertMemory.convertMemory,
    changeFileExtension:changeFolder.changeFileExtension,
    deleteFilesWithExtension:changeFolder.deleteFilesWithExtension,
    createDirectory:changeFolder.createDirectory,
    copyFiles:changeFolder.copyFiles,
    getFilesWithExtension:changeFolder.getFilesWithExtension,
    removeEmptyDirectories:changeFolder.removeEmptyDirectories,
    generateRandomString:generateString.generateRandomString,
    customCompress:compress.customCompress,
    customDecompress:compress.customDecompress,
    compressJSON:compress.compressJSON,
    decompressJSON:compress.decompressJSON,
    encodeBase64:compress.encodeBase64,
    decodeBase64:compress.decodeBase64,
    encodeURLSafeBase64:compress.encodeURLSafeBase64,
    decodeURLSafeBase64:compress.decodeURLSafeBase64,
    calculateEntropy:calculateEntropy.calculateEntropy,
    calculateInformationGain:calculateEntropy.calculateInformationGain,
    generateRandomBinarySequence:calculateEntropy.generateRandomBinarySequence,
    findLongestConsecutiveRun:calculateEntropy.findLongestConsecutiveRun,
    calculateCrossEntropy:calculateEntropy.calculateCrossEntropy,
    isEntropyBelowThreshold:calculateEntropy.isEntropyBelowThreshold,
    findExtremeEntropySequence:calculateEntropy.findExtremeEntropySequence,
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
    findSlowFunc:benchmark.findSlowFunc,
    findMostRobustFunc:benchmark.findMostRobustFunc,
    measureAverageExecutionTime:benchmark.measureAverageExecutionTime,
    compareFunctions:benchmark.compareFunctions,
    autoSelectFunction:benchmark.autoSelectFunction,
    convertImagesInFolder:changeImage.convertImagesInFolder,
    deleteImagesInFolder:changeImage.deleteImagesInFolder,
    renameImagesInFolder:changeImage.renameImagesInFolder,
    generateRandomPassword:password.generateRandomPassword,
    checkPasswordStrength:password.checkPasswordStrength,
    validatePasswordPolicy:password.validatePasswordPolicy,
    countLinesInFolder:countLines.countLinesInFolder,
    getObjectDetails:objectDetail.getObjectDetails,
    convertMeasurement:scientificTransform.convertMeasurement,
    convertTemperature:scientificTransform.convertTemperature,
    convertLength:scientificTransform.convertLength,
    convertTime:scientificTransform.convertTime,
    convertWeight:scientificTransform.convertWeight,
    convertVolume:scientificTransform.convertVolume,
    convertSpeed:scientificTransform.convertSpeed,
    levenshteinDistance:similarity.levenshteinDistance,
    compareFunctionSimilarity:similarity.compareFunctionSimilarity,
    latentSemanticAnalysis:similarity.latentSemanticAnalysis,
    jaccardSimilarity:similarity.jaccardSimilarity,
    generateUniformDistribution:generateDist.generateUniformDistribution,
    generateNormalDistribution:generateDist.generateNormalDistribution,
    generateExponentialDistribution:generateDist.generateExponentialDistribution,
    generatePoissonDistribution:generateDist.generatePoissonDistribution,
    generateBinomialDistribution:generateDist.generateBinomialDistribution,
    generateGeometricDistribution:generateDist.generateGeometricDistribution,
    calculateMean:generateDist.calculateMean,
    calculateStandardDeviation:generateDist.calculateStandardDeviation,
    calculateFinancialSummary:basicExpense.calculateFinancialSummary,
    calculateSavingsPercentage:basicExpense.calculateSavingsPercentage,
    findMostExpensiveCategory:basicExpense.findMostExpensiveCategory,
    calculateMonthlyAverageEarnings:basicExpense.calculateMonthlyAverageEarnings,
    determineProfitOrLoss:basicExpense.determineProfitOrLoss,
    calculateMonthlyCashFlow:basicExpense.calculateMonthlyCashFlow,
    isPrime:primeNumbers.isPrime,
    generatePrimesInRange:primeNumbers.generatePrimesInRange,
    nthPrime:primeNumbers.nthPrime,
    countPrimesInRange:primeNumbers.countPrimesInRange,
    generateTwinPrimesInRange:primeNumbers.generateTwinPrimesInRange,
    primeFactorization:primeNumbers.primeFactorization,
    sieveOfEratosthenes:primeNumbers.sieveOfEratosthenes,
    createReadMeViewer:readMeView.createReadMeViewer,
    cosineSimilarity:search.cosineSimilarity,
    vectorSearch:search.vectorSearch,
    tfidfVectorizer:search.tfidfVectorizer,
    calculateTFIDF:search.calculateTFIDF,
    fileToJSON:fileTransform.fileToJSON,
    textFileToJSON:fileTransform.textFileToJSON,
    calculateMovingAverage:weirdPrediction.calculateMovingAverage,
    predictNextNumbers:weirdPrediction.predictNextNumbers,
    predicNumLearning:weirdPrediction.predicNumLearning,
};




