const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function convertImagesInFolder(
    rootFolder,
    outputFolder,
    targetExtensions = ['.jpg', '.png', '.webp'],
    maxWidth = null,
    maxHeight = null,
    resolution = { width: 300, height: 300 },
    blockedFolders = null
  ) {
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }
  
    const files = fs.readdirSync(rootFolder);
  
    for (const file of files) {
      const filePath = path.join(rootFolder, file);
      const outputPath = path.join(
        outputFolder,
        path.relative(rootFolder, filePath)
      );
  
      const isDirectory = fs.statSync(filePath).isDirectory();
  
      if (isDirectory && blockedFolders && blockedFolders.includes(file)) {
        continue;
      }
  
      if (isDirectory) {
        convertImagesInFolder(
          filePath,
          outputPath,
          targetExtensions,
          maxWidth,
          maxHeight,
          resolution,
          blockedFolders
        );
      } else if (targetExtensions.some(ext => file.match(new RegExp(`${ext}$`, 'i')))) {
        try {
          sharp(filePath)
            .resize(maxWidth, maxHeight, {
              fit: 'inside',
              withoutEnlargement: true,
            })
            .withMetadata()
            .toFile(outputPath, (err, info) => {
              if (err) {
                console.error(`Error converting ${filePath}: ${err}`);
              } else {
                console.log(`Converted: ${filePath} -> ${outputPath}`);
              }
            });
        } catch (err) {
          console.error(`Error converting ${filePath}: ${err}`);
        }
      }
    }
  }


module.exports = {
    convertImagesInFolder:convertImagesInFolder
}

