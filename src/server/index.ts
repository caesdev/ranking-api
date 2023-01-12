import express, { Express, Request, Response } from "express";

// * Dotenv config
import dotenv from "dotenv";
dotenv.config();

// * Swagger
import swaggerUi from 'swagger-ui-express';

// * Security
import cors from 'cors';
import helmet from "helmet";

// TODO HTTPS

// * Root Router
import rootRouter from '../routes'
import mongoose from "mongoose";

// * Create Express APP
const server: Express = express();

// * Swagger Config and route
server.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
            explorer: true
        }
    })
);

// * Define SERVER to user "/api" and use rootRouter from 'index.ts' in routes
// From this point on over: http://localhost:8000/api/
server.use('/api', rootRouter);

// Static Server
server.use(express.static('public'));

// TODO Mongoose Connection
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://caesdev:${process.env.PASS}@cluster0.8lkkc60.mongodb.net/StareBot?retryWrites=true&w=majority`);

// * Security Config
server.use(helmet());
server.use(cors());

// Content Type:
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));

// * Redirection Config
// http://localhost:8000/ --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;
