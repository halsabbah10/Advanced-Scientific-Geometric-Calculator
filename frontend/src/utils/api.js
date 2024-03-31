import axios from 'axios';

// Define your API base URL
const baseURL = 'https://api.example.com';

// Create an instance of axios with custom configuration
const api = axios.create({
    baseURL,
    timeout: 5000, // Timeout after 5 seconds
    headers: {
        'Content-Type': 'application/json',
        // Add any custom headers here
    },
});

// Define functions to make API requests
const apiRequests = {
    // Function to perform scientific calculations
    calculateScientific: async (expression) => {
        try {
            const response = await api.post('/calculate/scientific', { expression });
            return response.data;
        } catch (error) {
            console.error('Error calculating scientific expression:', error);
            throw error;
        }
    },

    // Function to perform geometric shape calculations
    calculateGeometricShapes: async (shape, parameters) => {
        try {
            const response = await api.post('/calculate/geometric', { shape, parameters });
            return response.data;
        } catch (error) {
            console.error('Error calculating geometric shapes:', error);
            throw error;
        }
    },

    // Function to plot a graph
    plotGraph: async (equation, options) => {
        try {
            const response = await api.post('/plot/graph', { equation, options });
            return response.data;
        } catch (error) {
            console.error('Error plotting graph:', error);
            throw error;
        }
    },

    // Add more API functions as needed

};

export default apiRequests;
