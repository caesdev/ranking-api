import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configuration for .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: number | string = process.env.PORT || 8000;

// Define the first Route to our APP
app.get('/', (req: Request, res: Response) => {
    // Send a response
    res.send('Express APP [WORKING]');
});

// Execute APP and Listen Requests
app.listen(port, () => {
    console.log(`Express server executing correctly at  http://localhost:${port}`);
});