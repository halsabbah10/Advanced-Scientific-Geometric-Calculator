import React from 'react';

const ShapeVisualization = () => {
    // Function to generate SVG representation of a circle
    const visualizeCircle = (radius) => {
        return (
            <svg width={2 * radius} height={2 * radius} xmlns="http://www.w3.org/2000/svg">
                <circle cx={radius} cy={radius} r={radius} fill="transparent" stroke="black" />
            </svg>
        );
    };

    // Function to generate SVG representation of a square
    const visualizeSquare = (side) => {
        return (
            <svg width={side} height={side} xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width={side} height={side} fill="transparent" stroke="black" />
            </svg>
        );
    };

    // Function to generate SVG representation of a rectangle
    const visualizeRectangle = (width, height) => {
        return (
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width={width} height={height} fill="transparent" stroke="black" />
            </svg>
        );
    };

    // Function to generate SVG representation of an equilateral triangle
    const visualizeEquilateralTriangle = (side) => {
        const height = Math.sqrt(3) * side / 2;
        const points = `0,${height} ${side / 2},0 ${side},${height}`;
        return (
            <svg width={side} height={height} xmlns="http://www.w3.org/2000/svg">
                <polygon points={points} fill="transparent" stroke="black" />
            </svg>
        );
    };

    return (
        <div>
            <h2>Shape Visualization</h2>
            <div>
                <h3>Circle</h3>
                {visualizeCircle(50)} {/* Example: Render a circle with radius 50 */}
            </div>
            <div>
                <h3>Square</h3>
                {visualizeSquare(100)} {/* Example: Render a square with side length 100 */}
            </div>
            <div>
                <h3>Rectangle</h3>
                {visualizeRectangle(150, 100)} {/* Example: Render a rectangle with width 150 and height 100 */}
            </div>
            <div>
                <h3>Equilateral Triangle</h3>
                {visualizeEquilateralTriangle(120)} {/* Example: Render an equilateral triangle with side length 120 */}
            </div>
        </div>
    );
};

export default ShapeVisualization;
