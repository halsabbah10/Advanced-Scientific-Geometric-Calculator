const calculations = require('../utils/calculations');

const shapesCalculatorController = {
    calculateArea: (shape, dimensions) => {
        switch (shape) {
            case 'circle':
                return calculations.areaOfCircle(dimensions.radius);
            case 'square':
                return calculations.areaOfSquare(dimensions.side);
            case 'rectangle':
                return calculations.areaOfRectangle(dimensions.width, dimensions.height);
            case 'triangle':
                return calculations.areaOfTriangle(dimensions.base, dimensions.height);
            case 'parallelogram':
                return calculations.areaOfParallelogram(dimensions.base, dimensions.height);
            case 'trapezoid':
                return calculations.areaOfTrapezoid(dimensions.base1, dimensions.base2, dimensions.height);
            case 'ellipse':
                return calculations.areaOfEllipse(dimensions.a, dimensions.b);
            default:
                throw new Error('Shape not supported.');
        }
    },
    calculatePerimeter: (shape, dimensions) => {
        switch (shape) {
            case 'circle':
                return calculations.perimeterOfCircle(dimensions.radius);
            case 'square':
                return calculations.perimeterOfSquare(dimensions.side);
            case 'rectangle':
                return calculations.perimeterOfRectangle(dimensions.width, dimensions.height);
            case 'triangle':
                return calculations.perimeterOfTriangle(dimensions.side1, dimensions.side2, dimensions.side3);
            case 'parallelogram':
                return calculations.perimeterOfParallelogram(dimensions.base, dimensions.side);
            case 'trapezoid':
                return calculations.perimeterOfTrapezoid(dimensions.base1, dimensions.base2, dimensions.side1, dimensions.side2);
            default:
                throw new Error('Shape not supported.');
        }
    },
    calculateVolume: (shape, dimensions) => {
        switch (shape) {
            case 'cube':
                return calculations.volumeOfCube(dimensions.side);
            case 'cuboid':
                return calculations.volumeOfCuboid(dimensions.length, dimensions.width, dimensions.height);
            case 'sphere':
                return calculations.volumeOfSphere(dimensions.radius);
            case 'cylinder':
                return calculations.volumeOfCylinder(dimensions.radius, dimensions.height);
            case 'cone':
                return calculations.volumeOfCone(dimensions.radius, dimensions.height);
            default:
                throw new Error('Shape not supported.');
        }
    },
    calculateSurfaceArea: (shape, dimensions) => {
        switch (shape) {
            case 'cube':
                return calculations.surfaceAreaOfCube(dimensions.side);
            case 'cuboid':
                return calculations.surfaceAreaOfCuboid(dimensions.length, dimensions.width, dimensions.height);
            case 'sphere':
                return calculations.surfaceAreaOfSphere(dimensions.radius);
            case 'cylinder':
                return calculations.surfaceAreaOfCylinder(dimensions.radius, dimensions.height);
            case 'cone':
                return calculations.surfaceAreaOfCone(dimensions.radius, dimensions.slantHeight);
            default:
                throw new Error('Shape not supported.');
        }
    },
};

module.exports = shapesCalculatorController;
