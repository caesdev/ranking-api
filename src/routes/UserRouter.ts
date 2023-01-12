import { UserController } from "../controllers/UserController";
import express, { Request, Response } from "express";
import { logInfo } from "../utils/logger";

// Router from express
let usersRouter = express.Router();

// http://localhost:8000/api/users
usersRouter.route('/').get(async (req: Request, res: Response) => {
    // Obtain a Query Param
    let server_id: any = req?.query.server_id;
    logInfo(`Query Param: ${server_id}`)
    // Controller Instance to execute method
    const controller: UserController = new UserController();
    // Obtain Response
    if (server_id) {
        const response: any = await controller.getUsersByServerId(server_id);
        // Send to client the response
        return res.send(response);
    } else {
        const response: any = await controller.getUsers();
        // Send to client the response
        return res.send(response);
    }

});

// Export Hello Router
export default usersRouter;