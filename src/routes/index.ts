/**
 * Root Router
 * Redirections to Routers
 */

import { logInfo } from '../utils/logger';
import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import usersRouter from './UserRouter';

let server = express();
let rootRouter = express.Router();

rootRouter.get('/', (req: Request, res: Response) => {
    logInfo('GET: http//localhost:8000/api/')
    res.send('API Working');
});

server.use('/', rootRouter);
server.use('/hello', helloRouter);
server.use('/users', usersRouter);

export default server;