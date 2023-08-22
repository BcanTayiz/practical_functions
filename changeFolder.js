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

// Delete Files with a Specific Extension
function deleteFilesWithExtension(dirPath, extension) {
  fs.readdirSync(dirPath).forEach((item) => {
    const itemPath = path.join(dirPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      // If it's a directory, recursively call the function
      deleteFilesWithExtension(itemPath, extension);
    } else if (item.endsWith(extension)) {
      // If it's a file with the specified extension, delete it
      fs.unlinkSync(itemPath);
    }
  });
}

// Create a New Directory
function createDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Copy Files from One Directory to Another
function copyFiles(sourceDir, destinationDir) {
  fs.readdirSync(sourceDir).forEach((item) => {
    const sourcePath = path.join(sourceDir, item);
    const destinationPath = path.join(destinationDir, item);

    if (fs.statSync(sourcePath).isDirectory()) {
      // If it's a directory, create the directory in the destination and copy its contents
      createDirectory(destinationPath);
      copyFiles(sourcePath, destinationPath);
    } else {
      // If it's a file, copy it to the destination
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}

// Get a List of Files with a Specific Extension
function getFilesWithExtension(dirPath, extension) {
  const matchingFiles = [];

  fs.readdirSync(dirPath).forEach((item) => {
    const itemPath = path.join(dirPath, item);

    if (fs.statSync(itemPath).isFile() && item.endsWith(extension)) {
      matchingFiles.push(item);
    }
  });

  return matchingFiles;
}

// Remove Empty Directories
function removeEmptyDirectories(dirPath) {
  fs.readdirSync(dirPath).forEach((item) => {
    const itemPath = path.join(dirPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      // If it's a directory, recursively call the function
      removeEmptyDirectories(itemPath);

      // Check if the directory is empty after the recursive call
      if (fs.readdirSync(itemPath).length === 0) {
        fs.rmdirSync(itemPath);
      }
    }
  });
}



module.exports = {
    changeFileExtension:changeFileExtension,
    deleteFilesWithExtension:deleteFilesWithExtension,
    createDirectory:createDirectory,
    copyFiles:copyFiles,
    getFilesWithExtension:getFilesWithExtension,
    removeEmptyDirectories:removeEmptyDirectories
}