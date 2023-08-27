function replaceAt(string,index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

function replaceWordsInText(text, replacementObject, caseSensitive = true) {
    const replaceFn = (match) => {
        const lowerCaseMatch = match.toLowerCase();
        for (const key in replacementObject) {
            const lowerCaseKey = key.toLowerCase();
            if (lowerCaseKey === lowerCaseMatch) {
                return replacementObject[key];
            }
        }
        return match; // If no match is found, preserve the original word
    };

    // Create a regular expression with the specified flags
    const regexFlags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(Object.keys(replacementObject).join('|'), regexFlags);

    // Replace matched words with their corresponding values from the object while preserving case
    const replacedText = text.replace(regex, replaceFn);

    return replacedText;
}

module.exports = {
    replaceAt:replaceAt,
    replaceWordsInText:replaceWordsInText
}