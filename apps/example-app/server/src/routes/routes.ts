import { Router } from 'express';

const routes = Router();

// Define your routes here
routes.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Export the router
export default routes;