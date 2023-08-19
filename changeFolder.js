const fs = require('fs');
const path = require('path');



// Recursive function to change file extensions
function changeFileExtension(dirPath,from,to) {
  fs.readdirSync(dirPath).forEach((item) => {
    const itemPath = path.join(dirPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      // If it's a directory, recursively call the function
      changeFileExtension(itemPath);
    } else if (item.endsWith(from)) {
      // If it's a file and ends with the fromExtension, rename it
      const newItemPath = path.join(dirPath, item.replace(new RegExp(from + '$'), to));
      fs.renameSync(itemPath, newItemPath);
    }
  });
}



module.exports = {
    changeFileExtension:changeFileExtension
}