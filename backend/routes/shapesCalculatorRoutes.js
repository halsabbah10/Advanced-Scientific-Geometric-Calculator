const express = require('express');
const router = express.Router();
const {
    areaOfCircle, circumferenceOfCircle,
    areaOfRectangle, perimeterOfRectangle,
    areaOfSquare, perimeterOfSquare,
    areaOfTriangle, perimeterOfTriangle,
    volumeOfSphere, surfaceAreaOfSphere,
    volumeOfCube, surfaceAreaOfCube,
    volumeOfCylinder, surfaceAreaOfCylinder,
    volumeOfCone, surfaceAreaOfCone
} = require('../utils/calculations');

// Circle
router.get('/circle/area/:radius', (req, res) => {
    const { radius } = req.params;
    res.json({ shape: 'Circle', measurement: 'Area', value: areaOfCircle(Number(radius)) });
});

router.get('/circle/circumference/:radius', (req, res) => {
    const { radius } = req.params;
    res.json({ shape: 'Circle', measurement: 'Circumference', value: circumferenceOfCircle(Number(radius)) });
});

// Rectangle
router.get('/rectangle/area/:length/:width', (req, res) => {
    const { length, width } = req.params;
    res.json({ shape: 'Rectangle', measurement: 'Area', value: areaOfRectangle(Number(length), Number(width)) });
});

router.get('/rectangle/perimeter/:length/:width', (req, res) => {
    const { length, width } = req.params;
    res.json({ shape: 'Rectangle', measurement: 'Perimeter', value: perimeterOfRectangle(Number(length), Number(width)) });
});

// Square
router.get('/square/area/:side', (req, res) => {
    const { side } = req.params;
    res.json({ shape: 'Square', measurement: 'Area', value: areaOfSquare(Number(side)) });
});

router.get('/square/perimeter/:side', (req, res) => {
    const { side } = req.params;
    res.json({ shape: 'Square', measurement: 'Perimeter', value: perimeterOfSquare(Number(side)) });
});

// Triangle
router.get('/triangle/area/:base/:height', (req, res) => {
    const { base, height } = req.params;
    res.json({ shape: 'Triangle', measurement: 'Area', value: areaOfTriangle(Number(base), Number(height)) });
});

// Add more shape routes as needed...

// Sphere
router.get('/sphere/volume/:radius', (req, res) => {
    const { radius } = req.params;
    res.json({ shape: 'Sphere', measurement: 'Volume', value: volumeOfSphere(Number(radius)) });
});

router.get('/sphere/surfaceArea/:radius', (req, res) => {
    const { radius } = req.params;
    res.json({ shape: 'Sphere', measurement: 'Surface Area', value: surfaceAreaOfSphere(Number(radius)) });
});

// Cube
router.get('/cube/volume/:side', (req, res) => {
    const { side } = req.params;
    res.json({ shape: 'Cube', measurement: 'Volume', value: volumeOfCube(Number(side)) });
});

// Cylinder
router.get('/cylinder/volume/:radius/:height', (req, res) => {
    const { radius, height } = req.params;
    res.json({ shape: 'Cylinder', measurement: 'Volume', value: volumeOfCylinder(Number(radius), Number(height)) });
});

// Cone
router.get('/cone/volume/:radius/:height', (req, res) => {
    const { radius, height } = req.params;
    res.json({ shape: 'Cone', measurement: 'Volume', value: volumeOfCone(Number(radius), Number(height)) });
});

// Cube Surface Area
router.get('/cube/surfaceArea/:side', (req, res) => {
    const { side } = req.params;
    const surfaceArea = surfaceAreaOfCube(Number(side));
    res.json({ shape: 'Cube', measurement: 'Surface Area', value: surfaceArea });
});

// Cylinder Surface Area
router.get('/cylinder/surfaceArea/:radius/:height', (req, res) => {
    const { radius, height } = req.params;
    const surfaceArea = surfaceAreaOfCylinder(Number(radius), Number(height));
    res.json({ shape: 'Cylinder', measurement: 'Surface Area', value: surfaceArea });
});

// Cone Surface Area
router.get('/cone/surfaceArea/:radius/:slantHeight', (req, res) => {
    const { radius, slantHeight } = req.params;
    const surfaceArea = surfaceAreaOfCone(Number(radius), Number(slantHeight));
    res.json({ shape: 'Cone', measurement: 'Surface Area', value: surfaceArea });
});

// Triangle Perimeter
router.get('/triangle/perimeter/:side1/:side2/:side3', (req, res) => {
    const { side1, side2, side3 } = req.params;
    const perimeter = perimeterOfTriangle(Number(side1), Number(side2), Number(side3));
    res.json({ shape: 'Triangle', measurement: 'Perimeter', value: perimeter });
});

module.exports = router;
