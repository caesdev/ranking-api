/**
 * Root Router
 * Redirections to Routers
 */

import { logInfo } from '@/utils/logger';
import express, { Request, Response } from 'express';

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activated for requests to http//localhost:8000/api

// GET: http//localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
    logInfo('GET: http//localhost:8000/api/')
    // Send content
    res.send('API Working');
});

// Redirections to Routers & Controllers
server.use('/', rootRouter); // http//localhost:8000/api
server.use('/hello', rootRouter); // http//localhost:8000/api/hello --> HelloRouter

export default server;