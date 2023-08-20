function cosineSimilarity(text1, text2) {
    const tokenize = text => {
        return text.toLowerCase().split(/[^\w]+/).filter(word => word.length > 0);
    };

    const getWordFrequencyMap = text => {
        const tokens = tokenize(text);
        const frequencyMap = {};
        tokens.forEach(token => {
            if (!frequencyMap[token]) {
                frequencyMap[token] = 0;
            }
            frequencyMap[token]++;
        });
        return frequencyMap;
    };

    const dotProduct = (vec1, vec2) => {
        let product = 0;
        for (const key in vec1) {
            if (vec2.hasOwnProperty(key)) {
                product += vec1[key] * vec2[key];
            }
        }
        return product;
    };

    const magnitude = vec => {
        let sumOfSquares = 0;
        for (const key in vec) {
            sumOfSquares += vec[key] ** 2;
        }
        return Math.sqrt(sumOfSquares);
    };

    const text1FreqMap = getWordFrequencyMap(text1);
    const text2FreqMap = getWordFrequencyMap(text2);

    const dotProd = dotProduct(text1FreqMap, text2FreqMap);
    const mag1 = magnitude(text1FreqMap);
    const mag2 = magnitude(text2FreqMap);

    if (mag1 === 0 || mag2 === 0) {
        return 0; // Handle division by zero
    }

    return dotProd / (mag1 * mag2);
}

function findMostSimilarText(baseText, textDocument) {
    const sentences = textDocument.split(/[.!?]/);
    let mostSimilarSentence = '';
    let maxSimilarity = -1;

    sentences.forEach(sentence => {
        const similarity = cosineSimilarity(baseText, sentence);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            mostSimilarSentence = sentence.trim();
        }
    });

    return mostSimilarSentence;
}


function findMostSimDetailed(baseText, textDocument, nSentencesBefore, nSentencesAfter) {
    const paragraphs = textDocument.split('\n');
    let mostSimilarParagraph = '';
    let mostSimilarLine = '';
    let mostSimilarSentence = '';
    let maxSimilarity = -1;

    paragraphs.forEach((paragraph, paragraphIndex) => {
        const lines = paragraph.split('.');
        lines.forEach((line, lineIndex) => {
            const sentences = line.split(/[.!?]/);
            sentences.forEach((sentence, sentenceIndex) => {
                const similarity = cosineSimilarity(baseText, sentence);

                if (similarity > maxSimilarity) {
                    maxSimilarity = similarity;
                    mostSimilarParagraph = paragraph.trim();
                    mostSimilarLine = line.trim();
                    mostSimilarSentence = sentence.trim();
                }
            });
        });
    });

    // Find the index of the most similar sentence in the text
    const paragraphIndex = paragraphs.findIndex(paragraph => paragraph === mostSimilarParagraph);
    const lineIndex = mostSimilarParagraph.split('\n').findIndex(line => line === mostSimilarLine);
    const sentenceIndex = mostSimilarLine.split(/[.!?]/).findIndex(sentence => sentence === mostSimilarSentence);

    // Extract context
    const context = [];
    for (let i = Math.max(0, paragraphIndex - nSentencesBefore); i <= Math.min(paragraphs.length - 1, paragraphIndex + nSentencesAfter); i++) {
        const lines = paragraphs[i].split('.');
        for (let j = 0; j < lines.length; j++) {
            const sentences = lines[j].split(/[.!?]/);
            for (let k = 0; k < sentences.length; k++) {
                context.push(sentences[k].trim());
            }
        }
    }

    return {
        paragraph: mostSimilarParagraph,
        line: mostSimilarLine,
        sentence: mostSimilarSentence,
        paragraphIndex: paragraphIndex + 1, // Add 1 to make it 1-based index
        lineIndex: lineIndex + 1, // Add 1 to make it 1-based index
        sentenceIndex: sentenceIndex + 1, // Add 1 to make it 1-based index
        context: context.join(' '),
    };
}

module.exports = {
    findMostSimilarText:findMostSimilarText,
    findMostSimDetailed:findMostSimDetailed
}