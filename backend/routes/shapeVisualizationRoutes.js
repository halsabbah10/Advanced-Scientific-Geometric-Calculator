// backend/routes/shapeVisualizationRoutes.js
const express = require('express');
const router = express.Router();
const shapeVisualizationController = require('../controllers/shapeVisualizationController');
// Route for handling shape visualization calculations
router.post('/calculateShapeVisualization', shapeVisualizationController.calculateShapeVisualization);
module.exports = router;