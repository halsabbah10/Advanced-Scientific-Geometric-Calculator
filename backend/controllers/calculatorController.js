const calculations = require('../utils/calculations');

const calculatorController = {
    add: (num1, num2) => calculations.add(num1, num2),
    subtract: (num1, num2) => calculations.subtract(num1, num2),
    multiply: (num1, num2) => calculations.multiply(num1, num2),
    divide: (num1, num2) => {
        if (num2 === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return calculations.divide(num1, num2);
    },
    sine: (angle) => calculations.sine(angle),
    cosine: (angle) => calculations.cosine(angle),
    tangent: (angle) => calculations.tangent(angle),
    arcsin: (value) => calculations.arcsin(value),
    arccos: (value) => calculations.arccos(value),
    arctan: (value) => calculations.arctan(value),
    logarithm: (value, base) => {
        if (value <= 0 || base <= 0 || base === 1) {
            throw new Error('Invalid input for logarithm.');
        }
        return calculations.logarithm(value, base);
    },
    exponentiation: (base, exponent) => calculations.exponentiation(base, exponent),
    absolute: (x) => calculations.absolute(x),
    mean: (values) => calculations.mean(values),
    median: (values) => calculations.median(values),
    standardDeviation: (values) => calculations.standardDeviation(values),
};

module.exports = calculatorController;
