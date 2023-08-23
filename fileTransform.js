const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function textToJSON(textData) {
    try {
        // Split the text into an array of lines
        const lines = textData.split('\n').map(line => line.trim());
        
        // Construct a JSON object where each line becomes an item in an array
        const jsonData = { lines };
        
        return jsonData;
    } catch (error) {
        console.error('Error converting text to JSON:', error);
        return null;
    }
}

// Function to convert a text file into an array of JSON objects
function textFileToJSON(inputFile) {
    try {
        const textData = fs.readFileSync(inputFile, 'utf8');
        const lines = textData.split('\n').map(line => line.trim());
        const jsonData = lines.map(line => ({ text: line }));
        return jsonData;
    } catch (error) {
        console.error('Error converting text to JSON:', error);
        return null;
    }
}

// Function to convert CSV data to JSON
function csvToJSON(csvData) {
    return new Promise((resolve, reject) => {
        const jsonData = [];
        
        csvData
            .pipe(csv())
            .on('data', row => {
                jsonData.push(row);
            })
            .on('end', () => {
                // jsonData now contains the parsed CSV data as an array of objects
                resolve(jsonData);
            })
            .on('error', error => {
                reject(error);
            });
    });
}

// Function to convert data from a file to JSON
function fileToJSON(inputFile) {
    return new Promise((resolve, reject) => {
        const fileExtension = path.extname(inputFile).toLowerCase();
        
        if (fileExtension === '.txt') {
            const textData = fs.readFileSync(inputFile, 'utf8');
            const jsonData = textToJSON(textData);
            resolve(jsonData);
        } else if (fileExtension === '.csv') {
            const csvData = fs.createReadStream(inputFile);
            csvToJSON(csvData)
                .then(jsonData => {
                    resolve(jsonData);
                })
                .catch(error => {
                    reject(error);
                });
        } else {
            reject('Unsupported file type');
        }
    });
}


module.exports = {
    fileToJSON:fileToJSON,
    textFileToJSON:textFileToJSON,
}