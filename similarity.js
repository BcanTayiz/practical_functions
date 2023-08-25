const {tfidfVectorizer} = require('./search')

function levenshteinDistance(a, b) {
    const matrix = [];
  
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
  
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
  
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = a[j - 1] === b[i - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,    // Deletion
                matrix[i][j - 1] + 1,    // Insertion
                matrix[i - 1][j - 1] + cost // Substitution
            );
        }
    }
  
    return matrix[b.length][a.length];
}


function jaccardSimilarity(str1, str2) {
    const set1 = new Set(str1.split(''));
    const set2 = new Set(str2.split(''));
    
    const intersection = new Set([...set1].filter(char => set2.has(char)));
    const union = new Set([...set1, ...set2]);
    
    return intersection.size / union.size;
}
function latentSemanticAnalysis(queries, documents) {
    // Use the tfidfVectorizer to create TF-IDF vectors for queries and documents
    const tfidfMatrix = tfidfVectorizer(queries, documents);

    // Now you can perform similarity calculations using the TF-IDF vectors
    // For example, you can calculate the cosine similarity between query and document vectors

    const similarities = [];

    for (const queryVector of tfidfMatrix) {
        const queryVectorValues = Object.values(queryVector);
        const queryVectorNorm = Math.sqrt(queryVectorValues.reduce((sum, value) => sum + Math.pow(value, 2), 0));

        const documentSimilarities = [];

        for (const documentVector of tfidfMatrix) {
            const documentVectorValues = Object.values(documentVector);
            const documentVectorNorm = Math.sqrt(documentVectorValues.reduce((sum, value) => sum + Math.pow(value, 2), 0));

            let dotProduct = 0;

            for (const term in queryVector) {
                if (documentVector[term]) {
                    dotProduct += queryVector[term] * documentVector[term];
                }
            }

            const cosineSimilarity = dotProduct / (queryVectorNorm * documentVectorNorm);
            documentSimilarities.push(cosineSimilarity);
        }

        similarities.push(documentSimilarities);
    }

    return similarities;
}
function compareFunctionSimilarity(func1, func2) {
    const code1 = func1.toString();
    const code2 = func2.toString();
  
    const similarity = 1 - levenshteinDistance(code1, code2) / Math.max(code1.length, code2.length);
  
    return similarity;
}


module.exports = {
    levenshteinDistance:levenshteinDistance,
    compareFunctionSimilarity:compareFunctionSimilarity,
    latentSemanticAnalysis:latentSemanticAnalysis,
    jaccardSimilarity:jaccardSimilarity
}