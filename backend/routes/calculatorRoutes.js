// noinspection ExceptionCaughtLocallyJS

const express = require('express');
const router = express.Router();
const {
    add, subtract, multiply, divide,
    sine, cosine, tangent, arcsin, arccos, arctan,
    logarithm, exponentiation, exponential, absolute,
    mean, median, standardDeviation,
    vectorAdd, vectorDotProduct,
    matrixAddition, trapezoidalRule
} = require('../utils/calculations');

// Utility function for parsing array inputs
const parseArray = (str) => str.split(',').map(Number);

// Arithmetic operations
router.post('/arithmetic/:operation', (req, res) => {
    const { operation } = req.params;
    const { num1, num2 } = req.body;

    try {
        let result;
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    throw new Error('Division by zero error.');
                }
                result = divide(num1, num2);
                break;
            default:
                return res.status(400).json({ error: "Unsupported arithmetic operation." });
        }
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Trigonometric functions
router.get('/trigonometry/:function', (req, res) => {
    const { function: trigFunction } = req.params;
    const { angle } = req.query;

    try {
        let result;
        switch (trigFunction) {
            case 'sine':
                result = sine(Number(angle));
                break;
            case 'cosine':
                result = cosine(Number(angle));
                break;
            case 'tangent':
                result = tangent(Number(angle));
                break;
            case 'arcsin':
                result = arcsin(Number(angle));
                break;
            case 'arccos':
                result = arccos(Number(angle));
                break;
            case 'arctan':
                result = arctan(Number(angle));
                break;
            default:
                return res.status(400).json({ error: "Unsupported trigonometric function." });
        }
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Exponential, logarithmic, and other advanced operations
router.post('/advanced/:operation', (req, res) => {
    const { operation } = req.params;
    const { base, exponent, number } = req.body;

    try {
        let result;
        switch (operation) {
            case 'exponential':
                result = exponential(number);
                break;
            case 'logarithm':
                result = logarithm(number, base);
                break;
            case 'exponentiation':
                result = exponentiation(base, exponent);
                break;
            case 'absolute':
                result = absolute(number);
                break;
            default:
                return res.status(400).json({ error: "Unsupported advanced operation." });
        }
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Statistical functions
router.post('/statistics/:operation', (req, res) => {
    const { operation } = req.params;
    const { values } = req.body; // Expecting a string of comma-separated numbers

    try {
        const numValues = parseArray(values);
        let result;
        switch (operation) {
            case 'mean':
                result = mean(numValues);
                break;
            case 'median':
                result = median(numValues);
                break;
            case 'standardDeviation':
                result = standardDeviation(numValues);
                break;
            default:
                return res.status(400).json({ error: "Unsupported statistical operation." });
        }
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Vector and Matrix operations - Example
router.post('/vector/add', (req, res) => {
    const { vectorA, vectorB } = req.body; // Expecting arrays
    try {
        const result = vectorAdd(vectorA, vectorB);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Adding usage for vectorDotProduct
router.post('/vector/dotProduct', (req, res) => {
    const { vectorA, vectorB } = req.body;
    try {
        const result = vectorDotProduct(vectorA, vectorB);
        res.json({ result });
    } catch (error) {
        // Log the error and respond accordingly
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Adding usage for matrixAddition
router.post('/matrix/addition', (req, res) => {
    const { matrixA, matrixB } = req.body;
    try {
        const result = matrixAddition(matrixA, matrixB);
        res.json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Demonstrating trapezoidalRule (conceptual, not for direct use)
router.get('/integrate/trapezoidal', (req, res) => {
    // WARNING: For security reasons, directly executing a function from user input is highly discouraged
    // This route is conceptual and should be adapted for safe use in production applications
    const { a, b, n } = req.query;
    const sampleFunc = (x) => x * x; // Example function: x^2

    try {
        const result = trapezoidalRule(sampleFunc, Number(a), Number(b), Number(n));
        res.json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Add more routes as needed for other calculations

module.exports = router;
