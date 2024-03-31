import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiRequests from '../utils/api';

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCalculate = async () => {
        if (!expression) {
            setError('Please enter an expression');
            return;
        }
        setIsLoading(true);
        try {
            const data = await apiRequests.calculateScientific(expression);
            setResult(data.result);
            setError('');
        } catch (error) {
            setResult('');
            setError('Error calculating expression');
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h2>Scientific Calculator</h2>
            <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="Enter expression"
            />
            <button onClick={handleCalculate} disabled={isLoading}>Calculate</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {result && <div><h3>Result:</h3><p>{result}</p></div>}
            <Link to="/geometric">Go to Geometric Calculator</Link>
            <Link to="/plotting">Go to Graph Plotting</Link>
        </div>
    );
};

export default Calculator;
