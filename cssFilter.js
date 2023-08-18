function getRecolorFilter(targetColor) {
    const r = targetColor[0];
    const g = targetColor[1];
    const b = targetColor[2];

    const filter = `\
        invert(100%) \
        sepia(100%) \
        saturate(0%) \
        hue-rotate(0deg) \
        brightness(1000%) \
        contrast(1000%) \
        drop-shadow(${r}px ${g}px ${b}px rgba(${r}, ${g}, ${b}, 0.7))\
    `;

    return filter;
}

function parseColor(color) {
    if (color.startsWith("#")) {
        const hex = color.substring(1);
        return {
            r: parseInt(hex.substring(0, 2), 16),
            g: parseInt(hex.substring(2, 4), 16),
            b: parseInt(hex.substring(4, 6), 16),
            a: 1
        };
    } else if (color.startsWith("rgba")) {
        const rgba = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        return {
            r: parseInt(rgba[1]),
            g: parseInt(rgba[2]),
            b: parseInt(rgba[3]),
            a: parseFloat(rgba[4])
        };
    }
    throw new Error("Unsupported color format.");
}

function formatColor(rgb) {
    return `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${rgb.a})`;
}


function getMixColor(colorList) {
    const totalColors = colorList.length;
    if (totalColors === 0) {
        return "rgba(0, 0, 0, 0)";
    }

    const totalRGB = colorList.reduce((total, color) => {
        const colorRGB = parseColor(color);
        total.r += colorRGB.r;
        total.g += colorRGB.g;
        total.b += colorRGB.b;
        total.a += colorRGB.a;
        return total;
    }, { r: 0, g: 0, b: 0, a: 0 });

    const midpointRGB = {
        r: totalRGB.r / totalColors,
        g: totalRGB.g / totalColors,
        b: totalRGB.b / totalColors,
        a: totalRGB.a / totalColors
    };

    return formatColor(midpointRGB);
}

module.exports = {
    getRecolorFilter:getRecolorFilter,
    getMixColor:getMixColor
}