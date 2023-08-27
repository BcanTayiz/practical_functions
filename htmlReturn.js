function createHTMLElements(elementType, elementDataArray) {
    if (!Array.isArray(elementDataArray)) {
        throw new Error('Input must be an array of element data.');
    }

    // Create an array to store the generated HTML elements
    const htmlElements = [];

    // Loop through the element data array and create HTML elements
    elementDataArray.forEach(elementData => {
        const elementHTML = `<${elementType}>${elementData}</${elementType}>`;
        htmlElements.push(elementHTML);
    });

    return htmlElements;
}


module.exports = {
    createHTMLElements:createHTMLElements
}