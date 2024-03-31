const express = require('express');
const math = require('mathjs');
const router = express.Router();

// Generate data points for a linear function: y = mx + b
router.get('/linear', (req, res) => {
    const { m = 1, b = 0 } = req.query;
    const data = Array.from({ length: 10 }, (_, x) => ({
        x,
        y: m * x + Number(b)
    }));
    res.json({ type: 'linear', data });
});

// Generate data points for a quadratic function: y = ax^2 + bx + c
router.get('/quadratic', (req, res) => {
    const { a = 1, b = 0, c = 0 } = req.query;
    const data = Array.from({ length: 10 }, (_, x) => ({
        x,
        y: a * Math.pow(x, 2) + b * x + Number(c)
    }));
    res.json({ type: 'quadratic', data });
});

// Generate data points for a sine wave: y = A sin(Bx + C) + D
router.get('/sine', (req, res) => {
    const { A = 1, B = 1, C = 0, D = 0 } = req.query;
    const data = Array.from({ length: 100 }, (_, x) => ({
        x,
        y: A * Math.sin(B * x + Number(C)) + Number(D)
    }));
    res.json({ type: 'sine', data });
});

// Dynamic route for custom functions, using math.js to evaluate the function
router.get('/custom', (req, res) => {
    const { func = 'x^2', range = [0, 10], step = 0.1 } = req.query;
    const compiledFunc = math.compile(func);
    const data = [];
    for (let x = Number(range[0]); x <= Number(range[1]); x += Number(step)) {
        data.push({ x, y: compiledFunc.evaluate({ x }) });
    }
    res.json({ type: 'custom', function: func, data });
});

module.exports = router;
