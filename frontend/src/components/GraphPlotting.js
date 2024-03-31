import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const GraphPlotting = () => {
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);
    const [functionStr, setFunctionStr] = useState('');
    const [error, setError] = useState('');

    // Define plotFunction inside useEffect
    useEffect(() => {
        const plotFunction = (str) => {
            try {
                // Parse the function string and generate x and y values
                // eslint-disable-next-line no-new-func
                const parsedFunction = new Function('x', 'return ' + str);
                const x = [];
                const y = [];
                for (let i = -10; i <= 10; i += 0.1) {
                    x.push(i);
                    y.push(parsedFunction(i));
                }
                setXValues(x);
                setYValues(y);
                setError('');
            } catch (error) {
                setError('Invalid function syntax');
                setXValues([]);
                setYValues([]);
            }
        };

        const debounce = (func, delay) => {
            let timeoutId;
            return function (...args) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        };

        const debouncedPlotFunction = debounce(plotFunction, 300);

        debouncedPlotFunction(functionStr); // Call plotFunction inside debounce with functionStr dependency
    }, [functionStr]);

    return (
        <div>
            <h2>Graph Plotting</h2>
            <input
                type="text"
                placeholder="Enter a function (e.g., Math.sin(x))"
                value={functionStr}
                onChange={(e) => setFunctionStr(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Plot
                data={[
                    {
                        x: xValues,
                        y: yValues,
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'blue' },
                    },
                ]}
                layout={{ width: 800, height: 400, title: 'Plot of the function' }}
            />
        </div>
    );
};

export default GraphPlotting;
