import dotenv from 'dotenv';
import server from './src/server';
import { logError, logSuccess } from './src/utils/logger';

// * Configuration .env file
dotenv.config();

const port = process.env.PORT || 8000;

// * Execute SERVER
server.listen(port, () => {
    logSuccess(`[SERVER ON]: Running server at http://localhost:${port}/api`);

});

// * Control SERVER ERROR
server.on('error', (error) => {
    logError(`[SERVER ERROR]: ${error}`);
});

// "controllerPathGlobs": "src/**/*Controller.ts",