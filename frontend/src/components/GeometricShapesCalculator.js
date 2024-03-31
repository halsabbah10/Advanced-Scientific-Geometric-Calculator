import React, { useState } from 'react';

const GeometricShapesCalculator = () => {
    // State variables
    const [shape, setShape] = useState('circle');
    const [radius, setRadius] = useState('');
    const [side, setSide] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Calculate area and perimeter of 2D shapes
    const calculate2DShape = () => {
        let area = 0;
        let perimeter = 0;

        switch (shape) {
            case 'circle':
                area = Math.PI * Math.pow(parseFloat(radius), 2);
                perimeter = 2 * Math.PI * parseFloat(radius);
                break;
            case 'square':
                area = Math.pow(parseFloat(side), 2);
                perimeter = 4 * parseFloat(side);
                break;
            case 'rectangle':
                area = parseFloat(length) * parseFloat(width);
                perimeter = 2 * (parseFloat(length) + parseFloat(width));
                break;
            case 'triangle':
                area = (parseFloat(length) * parseFloat(height)) / 2;
                perimeter = parseFloat(length) + (2 * Math.sqrt(Math.pow(parseFloat(side), 2) + Math.pow(parseFloat(height), 2)));
                break;
            default:
                break;
        }

        setResult(`Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`);
    };

    // Calculate volume and surface area of 3D shapes
    const calculate3DShape = () => {
        let volume = 0;
        let surfaceArea = 0;

        switch (shape) {
            case 'sphere':
                volume = (4 / 3) * Math.PI * Math.pow(parseFloat(radius), 3);
                surfaceArea = 4 * Math.PI * Math.pow(parseFloat(radius), 2);
                break;
            case 'cube':
                volume = Math.pow(parseFloat(side), 3);
                surfaceArea = 6 * Math.pow(parseFloat(side), 2);
                break;
            case 'cylinder':
                volume = Math.PI * Math.pow(parseFloat(radius), 2) * parseFloat(height);
                surfaceArea = (2 * Math.PI * Math.pow(parseFloat(radius), 2)) + (2 * Math.PI * parseFloat(radius) * parseFloat(height));
                break;
            default:
                break;
        }

        setResult(`Volume: ${volume.toFixed(2)}, Surface Area: ${surfaceArea.toFixed(2)}`);
    };

    // Handle calculation based on selected shape
    const handleCalculate = () => {
        if (!shape) {
            setError('Please select a shape');
            return;
        }

        setError('');
        setIsLoading(true);

        setTimeout(() => { // Simulate API request delay
            if (shape === 'circle' || shape === 'square' || shape === 'rectangle' || shape === 'triangle') {
                calculate2DShape();
            } else {
                calculate3DShape();
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div>
            <h2>Geometric Shapes Calculator</h2>
            <label>Select Shape:</label>
            <select value={shape} onChange={(e) => setShape(e.target.value)}>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
                <option value="sphere">Sphere</option>
                <option value="cube">Cube</option>
                <option value="cylinder">Cylinder</option>
            </select>
            {shape !== 'triangle' && (
                <div>
                    <label>Radius:</label>
                    <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
                </div>
            )}
            {(shape === 'square' || shape === 'rectangle') && (
                <div>
                    <label>Side:</label>
                    <input type="number" value={side} onChange={(e) => setSide(e.target.value)} />
                </div>
            )}
            {shape === 'rectangle' && (
                <div>
                    <label>Length:</label>
                    <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                    <label>Width:</label>
                    <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
            )}
            {shape === 'triangle' && (
                <div>
                    <label>Length:</label>
                    <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                    <label>Height:</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                    <label>Side:</label>
                    <input type="number" value={side} onChange={(e) => setSide(e.target.value)} />
                </div>
            )}
            {(shape === 'sphere' || shape === 'cube' || shape === 'cylinder') && (
                <div>
                    <label>Radius:</label>
                    <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
                    <label>Height:</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
            )}
            <button onClick={handleCalculate}>Calculate</button>
            <div>
                <h3>Result:</h3>
                <p>{result}</p>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default GeometricShapesCalculator;
