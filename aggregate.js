function mergeObjects(listOfObjects){
    let mergedObj = {}
    if(!Array.isArray(listOfObjects)){
        throw Error('Value must be list of objects')
    }
    listOfObjects.forEach(element => {
        if(typeof(element) !== 'object'){
            throw Error('list includes non-object variable')
        }else{
            mergedObj = { ...mergedObj, ...element };
        }
    });

    return mergedObj
}

function createObjectFromLists(array1,array2){
    if(!Array.isArray(array1) || !Array.isArray(array2)){
        throw Error('Objects should be an array')
    }

    obj = {}
    if(array1.length > array2.length){
        for(let i=0;i<array2.length;i++){
            obj[array1[i]] = array2[i]
        }
    }else{
        for(let i=0;i<array1.length;i++){
            obj[array1[i]] = array2[i]
        } 
    }
    
    return obj
}

function combineAndFlattenLists(...lists) {
    const combinedList = [].concat(...lists); // Combine all lists into one
    const uniqueList = [...new Set([].concat(...combinedList))]; // Remove duplicates using Set
    
    return uniqueList;
  }

  class GroupBy {
    constructor(data) {
        this.data = data;
        this.groups = {};
    }

    by(keySelector) {
        this.groups = this.data.reduce((groups, item) => {
            const key = keySelector(item);

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(item);

            return groups;
        }, {});

        return this;
    }

    mean() {
        const means = {};
        for (const key in this.groups) {
            const group = this.groups[key];
    
            // Filter out entries with NaN scores
            const validScores = group.map(item => item.score).filter(score => !isNaN(score));
    
            if (validScores.length > 0) {
                const sum = validScores.reduce((acc, score) => acc + score, 0);
                means[key] = sum / validScores.length;
            } else {
                means[key] = 0; // Set mean to 0 for groups with no valid scores
            }
        }
        return means;
    }

    median() {
        const medians = {};
        for (const key in this.groups) {
            const group = this.groups[key];
    
            // Filter out entries with NaN scores
            const validScores = group.map(item => item.score).filter(score => !isNaN(score));
    
            if (validScores.length > 0) {
                const sortedScores = validScores.slice().sort((a, b) => a - b);
                const middle = Math.floor(sortedScores.length / 2);
    
                if (sortedScores.length % 2 === 0) {
                    medians[key] = (sortedScores[middle - 1] + sortedScores[middle]) / 2;
                } else {
                    medians[key] = sortedScores[middle];
                }
            } else {
                medians[key] = NaN; // Set median to NaN for groups with no valid scores
            }
        }
        return medians;
    }
    

    mode() {
        const modes = {};
        for (const key in this.groups) {
            const group = this.groups[key];
    
            // Filter out entries with NaN scores
            const validScores = group.map(item => item.score).filter(score => !isNaN(score));
    
            if (validScores.length > 0) {
                const frequencyMap = {};
                let maxCount = 0;
                let modeValue = validScores[0];
    
                validScores.forEach(score => {
                    if (frequencyMap[score]) {
                        frequencyMap[score]++;
                    } else {
                        frequencyMap[score] = 1;
                    }
    
                    if (frequencyMap[score] > maxCount) {
                        maxCount = frequencyMap[score];
                        modeValue = score;
                    }
                });
    
                modes[key] = modeValue;
            } else {
                modes[key] = NaN; // Set mode to NaN for groups with no valid scores
            }
        }
        return modes;
    }

    range() {
        const ranges = {};
        for (const key in this.groups) {
            const group = this.groups[key];

            // Filter out entries with NaN scores
            const validScores = group.map(item => item.score).filter(score => !isNaN(score));

            if (validScores.length > 0) {
                const minScore = Math.min(...validScores);
                const maxScore = Math.max(...validScores);
                ranges[key] = maxScore - minScore;
            } else {
                ranges[key] = NaN; // Set range to NaN for groups with no valid scores
            }
        }
        return ranges;
    }

    standardDeviation() {
        const standardDeviations = {};
        for (const key in this.groups) {
            const group = this.groups[key];

            // Filter out entries with NaN scores
            const validScores = group.map(item => item.score).filter(score => !isNaN(score));

            if (validScores.length > 0) {
                const mean = validScores.reduce((acc, score) => acc + score, 0) / validScores.length;
                const squaredDifferences = validScores.map(score => Math.pow(score - mean, 2));
                const variance = squaredDifferences.reduce((acc, squaredDiff) => acc + squaredDiff, 0) / validScores.length;
                const stdDeviation = Math.sqrt(variance);
                standardDeviations[key] = stdDeviation;
            } else {
                standardDeviations[key] = NaN; // Set standard deviation to NaN for groups with no valid scores
            }
        }
        return standardDeviations;
    }
    
}


module.exports = {
    mergeObjects:mergeObjects,
    createObjectFromLists:createObjectFromLists,
    combineAndFlattenLists:combineAndFlattenLists,
    GroupBy:GroupBy
};