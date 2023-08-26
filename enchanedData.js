function enhanceApiResponse(apiResponse) {
    function getObjectMemoryUsage(obj) {
        // This is a rough approximation of memory usage based on the object's size.
        // Note that this won't be highly precise.
        return JSON.stringify(obj).length * 2; // Multiply by 2 to account for 2 bytes per character (UTF-16).
    }

    function findLargestNode(node, maxMemoryNode, maxMemory) {
        if (node !== null && typeof node === 'object') {
            const memoryUsage = getObjectMemoryUsage(node);
            if (memoryUsage > maxMemory) {
                maxMemory = memoryUsage;
                maxMemoryNode = node;
            }

            for (const key in node) {
                if (node.hasOwnProperty(key)) {
                    const childNode = node[key];
                    const [largestChildNode, largestChildMemory] = findLargestNode(childNode, maxMemoryNode, maxMemory);
                    if (largestChildMemory > maxMemory) {
                        maxMemory = largestChildMemory;
                        maxMemoryNode = largestChildNode;
                    }
                }
            }
        }
        return [maxMemoryNode, maxMemory];
    }

    // Find the largest node in the API response
    const [largestNode] = findLargestNode(apiResponse, null, 0);

    return largestNode;
}


function findDataByType(apiResponse, targetType) {
    const foundData = [];

    function searchForType(data) {
        if (typeof data === targetType) {
            foundData.push(data);
        } else if (typeof data === 'object' && data !== null) {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    searchForType(data[key]);
                }
            }
        } else if (Array.isArray(data)) {
            data.forEach(item => {
                searchForType(item);
            });
        }
    }

    searchForType(apiResponse);

    return foundData;
}

function findDataWithKeysByType(apiResponse, targetType) {
    const foundData = [];

    function searchForType(data, currentPath) {
        if (typeof data === targetType) {
            foundData.push({ path: currentPath, value: data });
        } else if (typeof data === 'object' && data !== null) {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    searchForType(data[key], `${currentPath}.${key}`);
                }
            }
        } else if (Array.isArray(data)) {
            data.forEach((item, index) => {
                searchForType(item, `${currentPath}[${index}]`);
            });
        }
    }

    searchForType(apiResponse, 'apiResponse');

    return foundData;
}



module.exports = {
    enhanceApiResponse:enhanceApiResponse,
    findDataByType:findDataByType,
    findDataWithKeysByType:findDataWithKeysByType,
}