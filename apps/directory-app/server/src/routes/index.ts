import { Router } from 'express';

const router = Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Export the router
export default router;