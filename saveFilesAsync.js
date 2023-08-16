const fs = require('fs').promises;

async function filesToArray(files) {
    if(!Array.isArray(files)){
        throw Error('The files value should be a list of files')
    }
    const array = await Promise.all(files.map(async (file) => {
        const contents = await fs.readFile(file, 'utf8');
        return contents.split('\r\n')
    }));
    return array;
}

module.exports = {
    filesToArray: filesToArray
};
