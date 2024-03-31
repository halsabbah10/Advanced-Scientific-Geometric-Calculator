const { PI, pow, sqrt, sin, cos, tan, log, exp, abs, atan } = Math;

// Basic arithmetic operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? 'Error: Divide by zero' : a / b;

// Exponential function: e^x
const exponential = (x) => exp(x);

// Absolute value function
const absolute = (x) => abs(x);

// Trigonometric functions
const sine = (angle) => sin(angle);
const cosine = (angle) => cos(angle);
const tangent = (angle) => tan(angle);
const arcsin = (value) => Math.asin(value);
const arccos = (value) => Math.acos(value);
const arctan = (value) => atan(value);

// Logarithms and exponentiation
const logarithm = (value, base = Math.E) => log(value) / log(base);
const exponentiation = (base, exponent) => pow(base, exponent);

// Geometric shape calculations for 2D shapes
const areaOfTriangle = (base, height) => 0.5 * base * height;
const perimeterOfTriangle = (side1, side2, side3) => side1 + side2 + side3;

// Advanced Geometric Calculations
const volumeOfCone = (radius, height) => (1/3) * PI * pow(radius, 2) * height;
const surfaceAreaOfCone = (radius, slantHeight) => PI * radius * (radius + slantHeight);

// Statistical functions
const mean = (values) => values.reduce(add, 0) / values.length;
const median = (values) => {
    const sortedValues = [...values].sort((a, b) => a - b);
    const midIndex = Math.floor(sortedValues.length / 2);
    return sortedValues.length % 2 !== 0
        ? sortedValues[midIndex]
        : (sortedValues[midIndex - 1] + sortedValues[midIndex]) / 2;
};
const standardDeviation = (values) => {
    const mu = mean(values);
    return sqrt(values.reduce((acc, val) => acc + pow(val - mu, 2), 0) / values.length);
};

// Vector operations
const vectorAdd = (vectorA, vectorB) => vectorA.map((val, i) => val + vectorB[i]);
const vectorDotProduct = (vectorA, vectorB) => vectorA.reduce((acc, val, i) => acc + val * vectorB[i], 0);

// Matrix operations
const matrixAddition = (matrixA, matrixB) => matrixA.map((row, i) => vectorAdd(row, matrixB[i]));

// Numerical Integration (Trapezoidal Rule)
const trapezoidalRule = (func, a, b, n) => {
    const h = (b - a) / n;
    let sum = 0.5 * (func(a) + func(b));
    for (let i = 1; i < n; i++) {
        sum += func(a + i * h);
    }
    return sum * h;
};

// Export all functions
module.exports = {
    add, subtract, multiply, divide,
    sine, cosine, tangent, arcsin, arccos, arctan,
    logarithm, exponentiation,
    areaOfTriangle, perimeterOfTriangle,
    volumeOfCone, surfaceAreaOfCone,
    mean, median, standardDeviation,
    vectorAdd, vectorDotProduct,
    matrixAddition,
    trapezoidalRule, exponential, absolute,
};
