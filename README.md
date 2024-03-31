# Advanced Scientific and Geometric Shapes Calculator with Graph Plotting

## Project Description
This project aims to develop a comprehensive web application that combines the functionality of a scientific calculator with the ability to calculate properties of both simple and complex geometric shapes (2D and 3D), alongside graph plotting capabilities. The application will provide an interactive and educational tool for users by visualizing geometric shapes based on the calculations performed. The frontend will be built using React for a dynamic user interface, while Express.js will be used on the backend for efficient request handling and calculation processing.

## Core Features
- **Scientific Calculator Module:** Implement standard scientific calculator functionalities including trigonometric functions, logarithms, powers, roots, and factorial calculations. Support complex number calculations.
- **Geometric Shapes Calculator:**
  - Calculate area, perimeter, volume, and surface area for various 2D and 3D shapes.
  - Support complex geometric operations such as determining centroid, inradius, circumradius, and Euler's characteristic.
- **Graph Plotting Functionality:**
  - Plot mathematical functions in a Cartesian coordinate system.
  - Support plotting multiple functions simultaneously with different colors.
  - Include zoom in/out and pan functionalities for detailed graph exploration.
- **Shape Visualization:**
  - Provide visual representation of geometric shapes.
  - Allow real-time modification of dimensions with dynamic property and visual updates.
- **Interactive and Responsive UI:**
  - Develop a responsive and intuitive user interface using React.
  - Implement easy-to-navigate layout for different calculator functionalities.
- **Backend Calculation Engine:**
  - Utilize Express.js for efficient server-side calculation processing.
  - Secure API endpoints for handling calculation requests.

## Technical Requirements
- **Frontend:** React with hooks and context for state management.
- **Backend:** Express.js on Node.js.
- **Data Visualization:** D3.js or Three.js for graph plotting and shape visualization.
- **Styling:** CSS Grid, Flexbox, SASS, or Styled Components.
- **Deployment:** Consider platforms like Heroku or Netlify for public access.

## Project Structure
```
- frontend/
  - src/
    - index.js
    - App.js
    - components/
      - Calculator.js
      - GeometricShapesCalculator.js
      - GraphPlotting.js
      - ShapeVisualization.js
    - utils/
      - api.js
- backend/
  - server.js
  - controllers/
    - calculatorController.js
    - shapesCalculatorController.js
    - graphPlottingController.js
    - shapeVisualizationController.js
  - utils/
    - calculations.js
  - routes/
    - calculatorRoutes.js
    - shapesCalculatorRoutes.js
    - graphPlottingRoutes.js
    - shapeVisualizationRoutes.js
```

## Stretch Goals
- Implement a history feature to track and revisit previous calculations.
- Add user authentication for saving and retrieving personal calculation histories.
- Integrate educational content explaining mathematical principles.

## Installation and Setup
1. Clone the repository.
2. Install dependencies for frontend and backend using `npm install`.
3. Start the frontend and backend servers using `npm start`.

## Contributors
- [Husam AlSabbah](https://github.com/halsabbah10)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

