const calculations = require('../utils/calculations');

const graphPlottingController = {
  plotLinear: (start, end, intervals) => {
    const data = [];
    const step = (end - start) / intervals;
    for (let x = start; x <= end; x += step) {
      const y = 2 * x + 3; // Adjust this line according to your linear function
      data.push({ x, y });
    }
    return data;
  },

  plotQuadratic: (a, b, c, start, end, intervals) => {
    const data = [];
    const step = (end - start) / intervals;
    for (let x = start; x <= end; x += step) {
      const y = a * x * x + b * x + c;
      data.push({ x, y });
    }
    return data;
  },

  plotExponential: (base, start, end, intervals) => {
    const data = [];
    const step = (end - start) / intervals;
    for (let x = start; x <= end; x += step) {
      const y = Math.pow(base, x);
      data.push({ x, y });
    }
    return data;
  },

  plotTrigonometric: (funcType, start, end, intervals) => {
    const data = [];
    const step = (end - start) / intervals;
    let func;
    switch (funcType) {
      case 'sin':
        func = calculations.sine;
        break;
      case 'cos':
        func = calculations.cosine;
        break;
      case 'tan':
        func = calculations.tangent;
        break;
      default:
        throw new Error('Trigonometric function not supported.');
    }
    for (let x = start; x <= end; x += step) {
      const y = func(x);
      data.push({ x, y });
    }
    return data;
  },

  plotLogarithmic: (base, start, end, intervals) => {
    const data = [];
    const step = (end - start) / intervals;
    for (let x = start; x <= end; x += step) {
      const y = calculations.logarithm(x, base);
      data.push({ x, y });
    }
    return data;
  },

  plotPolynomial: (coefficients, start, end, intervals) => {
    const data = [];
    const step = (end - start) / intervals;
    for (let x = start; x <= end; x += step) {
      let y = 0;
      for (let i = 0; i < coefficients.length; i++) {
        y += coefficients[i] * Math.pow(x, i);
      }
      data.push({ x, y });
    }
    return data;
  },

  plotCustomFunction: (funcString, start, end, intervals) => {
    const data = [];
    const step = (end - start) / intervals;
    const func = new Function('x', `return ${funcString}`);
    for (let x = start; x <= end; x += step) {
      const y = func(x);
      data.push({ x, y });
    }
    return data;
  },
};

module.exports = graphPlottingController;
