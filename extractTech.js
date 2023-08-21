function extractTechnologiesFromCode(code) {
    const technologyDetails = [];
  
    // Regular expressions to match require/import statements
    const requirePattern = /require\(['"]([^'"]+)['"]\)/g;
    const importPattern = /import .* from ['"]([^'"]+)['"]/g;
  
    let match;
  
    while ((match = requirePattern.exec(code))) {
      const libraryName = match[1];
      technologyDetails.push({
        type: 'Library',
        name: libraryName,
        usage: 'Imported using require()',
      });
    }
  
    while ((match = importPattern.exec(code))) {
      const libraryName = match[1];
      technologyDetails.push({
        type: 'Library',
        name: libraryName,
        usage: 'Imported using import statement',
      });
    }
  
    return technologyDetails;
  }