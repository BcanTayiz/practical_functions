const fs = require('fs');
const path = require('path');

async function countLinesInFolder(folderPath, ignoreDirs = []) {
    let totalLines = 0;
  
    async function countLinesInFile(filePath) {
      return new Promise((resolve, reject) => {
        let lines = 0;
        const reader = fs.createReadStream(filePath);
  
        reader.on('data', (chunk) => {
          lines += chunk.toString('utf8').split('\n').length - 1;
        });
  
        reader.on('end', () => {
          resolve(lines);
        });
  
        reader.on('error', (error) => {
          reject(error);
        });
      });
    }
  
    async function processDirectory(dirPath) {
      const files = await fs.promises.readdir(dirPath);
  
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = await fs.promises.stat(filePath);
  
        if (stats.isDirectory()) {
          if (!ignoreDirs.includes(file)) {
            totalLines += await processDirectory(filePath);
          }
        } else if (stats.isFile() && path.extname(filePath) === '.js') {
          const linesInFile = await countLinesInFile(filePath);
          totalLines += linesInFile;
          console.log(`File: ${filePath}, Lines: ${linesInFile}`);
        }
      }
  
      return totalLines;
    }
  
    try {
      return await processDirectory(folderPath);
    } catch (error) {
      console.error('Error:', error);
      return -1; // Return -1 to indicate an error
    }
  }

module.exports = {
    countLinesInFolder:countLinesInFolder
}