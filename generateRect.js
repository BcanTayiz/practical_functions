function genNonOverLapRect(count, maxWidth, maxHeight) {
    const rectangles = [];

    for (let i = 0; i < count; i++) {
        const width = Math.random() * (maxWidth - 20) + 20; // Minimum width of 20
        const height = Math.random() * (maxHeight - 20) + 20; // Minimum height of 20

        const x = Math.random() * (maxWidth - width);
        const y = Math.random() * (maxHeight - height);

        const rectangle = { x, y, width, height };
        let isOverlapping = false;

        for (const existingRect of rectangles) {
            if (
                rectangle.x + rectangle.width > existingRect.x &&
                existingRect.x + existingRect.width > rectangle.x &&
                rectangle.y + rectangle.height > existingRect.y &&
                existingRect.y + existingRect.height > rectangle.y
            ) {
                isOverlapping = true;
                break;
            }
        }

        if (!isOverlapping) {
            rectangles.push(rectangle);
        } else {
            i--; // Retry creating a rectangle
        }
    }

    return rectangles;
}



module.exports = {
    genNonOverLapRect:genNonOverLapRect
}