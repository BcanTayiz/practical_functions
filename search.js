const natural = require('natural');
const fs = require('fs');
const {isEmptyObject} = require('./checkValue')

// Define the vectorSearch function
function vectorSearch(query, topN = 5, json_file = './sample_data.json', key = 'text') {
    try {
        // Load your JSON data
        const rawData = fs.readFileSync(json_file);
        const data = JSON.parse(rawData);

        // Extract the text you want to search
        const texts = data.map(item => item[key]);

        const results = [];

        // Construct the query vector using the tfidfVectorizer function
        const queryVector = tfidfVectorizer([query], texts)[0]; // Take the first vector from the array

        // Calculate cosine similarity between the query vector and document vectors
        texts.forEach((text, index) => {
            // Calculate TF-IDF vector for the document using the TF-IDF vectorizer
            const documentVector = calculateTFIDF(text, texts);

            // Check for zero magnitudes to avoid division by zero
            if (!isEmptyObject(queryVector) && !isEmptyObject(documentVector)) {
                const similarity = cosineSimilarity(queryVector, documentVector);
                results.push({ text: texts[index], similarity });
            }
        });

        // Sort results by similarity in descending order
        results.sort((a, b) => b.similarity - a.similarity);

        // Return the top matching documents
        return results.slice(0, topN);
    } catch (error) {
        console.error('An error occurred:', error);
        return []; // Return an empty array in case of an error
    }
}

// Function to calculate cosine similarity between two TF-IDF vectors
function cosineSimilarity(vectorA, vectorB) {
    const termsA = Object.keys(vectorA);
    const termsB = Object.keys(vectorB);

    // Calculate the dot product
    let dotProduct = 0;
    for (const term of termsA) {
        if (termsB.includes(term)) {
            dotProduct += vectorA[term] * vectorB[term];
        }
    }

    // Calculate the magnitude of vectorA
    let magnitudeA = 0;
    for (const term of termsA) {
        magnitudeA += Math.pow(vectorA[term], 2);
    }
    magnitudeA = Math.sqrt(magnitudeA);

    // Calculate the magnitude of vectorB
    let magnitudeB = 0;
    for (const term of termsB) {
        magnitudeB += Math.pow(vectorB[term], 2);
    }
    magnitudeB = Math.sqrt(magnitudeB);

    // Check for zero magnitude to avoid division by zero
    if (magnitudeA === 0 || magnitudeB === 0) {
        return 0;
    }

    return dotProduct / (magnitudeA * magnitudeB);
}

// Function to create a query vector
function tfidfVectorizer(queries, documents) {
    // Create a document-term matrix
    const documentTermMatrix = [];
    
    // Split documents into terms and count term frequency within each document
    documents.forEach(document => {
        const terms = document.split(' ');
        const termFrequency = {};

        for (const term of terms) {
            if (!termFrequency[term]) {
                termFrequency[term] = 1;
            } else {
                termFrequency[term]++;
            }
        }

        documentTermMatrix.push(termFrequency);
    });

    // Calculate TF-IDF values for the queries
    const tfidfMatrix = [];

    queries.forEach(query => {
        const queryTerms = query.split(' ');
        const queryVector = {};

        queryTerms.forEach(term => {
            const documentFrequency = documentTermMatrix.reduce((count, document) => {
                return document[term] ? count + 1 : count;
            }, 0);

            const inverseDocumentFrequency = Math.log(documents.length / (1 + documentFrequency));

            queryVector[term] = inverseDocumentFrequency;
        });

        tfidfMatrix.push(queryVector);
    });

    return tfidfMatrix;
}

function calculateTFIDF(document, corpus) {
    const tfidfVector = {};

    // Split the document into terms
    const terms = document.split(' ');

    // Calculate term frequency (TF)
    const termFrequency = {};
    terms.forEach(term => {
        termFrequency[term] = (termFrequency[term] || 0) + 1;
    });

    // Calculate inverse document frequency (IDF) for each term
    terms.forEach(term => {
        const documentFrequency = corpus.reduce((count, doc) => (doc.includes(term) ? count + 1 : count), 0);
        const inverseDocumentFrequency = Math.log(corpus.length / (1 + documentFrequency));
        const tfidf = termFrequency[term] * inverseDocumentFrequency;
        tfidfVector[term] = tfidf;
    });

    return tfidfVector;
}



module.exports = {
    cosineSimilarity:cosineSimilarity,
    vectorSearch:vectorSearch,
}