require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const path = require('path');
const morgan = require('morgan'); // HTTP request logger middleware
const mongoose = require('mongoose'); // MongoDB object modeling tool

// Import route handlers
const calculatorRoutes = require('./routes/calculatorRoutes');
const shapesCalculatorRoutes = require('./routes/shapesCalculatorRoutes');
const graphPlottingRoutes = require('./routes/graphPlottingRoutes');
const shapeVisualizationRoutes = require('./routes/shapeVisualizationRoutes');
// Add other route imports as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(morgan('tiny')); // HTTP request logging

// API routes
app.use('/api/calculator', calculatorRoutes);
app.use('/api/shapes', shapesCalculatorRoutes);
app.use('/api/graphs', graphPlottingRoutes);
app.use('/api/visualization', shapeVisualizationRoutes);
// Add other routes as needed

// Serve static files from React app in production
app.use(express.static(path.join(__dirname, '../frontend/build')));

// SPA's "catchall" handler for serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Error handling middleware
app.use((err, req, res) => {
    // Log the error internally
    console.error(err);

    // Return a generic message or customize based on `err`
    res.status(500).json({ message: 'Internal server error', error: err });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
