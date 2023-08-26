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



module.exports = {
    enhanceApiResponse:enhanceApiResponse,
}