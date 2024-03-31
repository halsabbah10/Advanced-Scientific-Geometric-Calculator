const shapeVisualizationController = {
    // Generate SVG representation of a circle
    visualizeCircle: (radius) => {
        return `<svg width="${2 * radius}" height="${2 * radius}" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="${radius}" cy="${radius}" r="${radius}" fill="transparent" stroke="black" />
                     </svg>`;
    },

    // Generate SVG representation of a square
    visualizeSquare: (side) => {
        return `<svg width="${side}" height="${side}" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="${side}" height="${side}" fill="transparent" stroke="black" />
                     </svg>`;
    },

    // Generate SVG representation of a rectangle
    visualizeRectangle: (width, height) => {
        return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="${width}" height="${height}" fill="transparent" stroke="black" />
                     </svg>`;
    },

    // Generate SVG representation of an equilateral triangle
    visualizeEquilateralTriangle: (side) => {
        const height = Math.sqrt(3) * side / 2;
        const points = `0,${height} ${side / 2},0 ${side},${height}`;
        return `<svg width="${side}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="${points}" fill="transparent" stroke="black" />
                     </svg>`;
    }
};

module.exports = shapeVisualizationController;
