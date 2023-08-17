function filterStringsByTerm(strings, searchTerm, mode) {
    if (!Array.isArray(strings) || typeof searchTerm !== 'string' || (mode !== 'prefix' && mode !== 'suffix' && mode !== 'includes')) {
        throw new Error("Invalid arguments");
    }

    return strings.filter(str => {
        if (mode === 'prefix') {
            return str.startsWith(searchTerm);
        } else if (mode === 'suffix') {
            return str.endsWith(searchTerm);
        } else if (mode === 'includes') {
            return str.includes(searchTerm);
        }
    });
}

module.exports = {
    filterStringsByTerm:filterStringsByTerm
}