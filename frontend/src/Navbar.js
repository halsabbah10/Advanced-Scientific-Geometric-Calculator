// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Calculator</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shapes" className="nav-link">Geometric Shapes Calculator</Link>
                </li>
                <li className="nav-item">
                    <Link to="/graph" className="nav-link">Graph Plotting</Link>
                </li>
                <li className="nav-item">
                    <Link to="/visualization" className="nav-link">Shape Visualization</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
