import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from '../src/components/Calculator';
import GeometricShapesCalculator from '../src/components/GeometricShapesCalculator';
import GraphPlotting from '../src/components/GraphPlotting';
import ShapeVisualization from '../src/components/ShapeVisualization';
import Navbar from './Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={CalculatorPage} />
                        <Route path="/shapes" component={ShapesPage} />
                        <Route path="/graph" component={GraphPage} />
                        <Route path="/visualization" component={VisualizationPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

// Component for the Calculator page
const CalculatorPage = () => {
    return (
        <div>
            <h1>Scientific Calculator</h1>
            <Calculator />
        </div>
    );
};

// Component for the Geometric Shapes Calculator page
const ShapesPage = () => {
    return (
        <div>
            <h1>Geometric Shapes Calculator</h1>
            <GeometricShapesCalculator />
        </div>
    );
};

// Component for the Graph Plotting page
const GraphPage = () => {
    return (
        <div>
            <h1>Graph Plotting</h1>
            <GraphPlotting />
        </div>
    );
};

// Component for the Shape Visualization page
const VisualizationPage = () => {
    return (
        <div>
            <h1>Shape Visualization</h1>
            <ShapeVisualization />
        </div>
    );
};

// Component for the 404 Not Found page
const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
};

export default App;
