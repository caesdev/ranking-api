import { UserController } from "../controllers/UserController";
import express, { Request, Response } from "express";
import { logInfo } from "../utils/logger";

let usersRouter = express.Router();

// http://localhost:8000/api/users
usersRouter.route('/').get(async (req: Request, res: Response) => {
    let server_id: any = req?.query.server_id;
    logInfo(`Query Param: ${server_id}`)
    const controller: UserController = new UserController();
    if (server_id) {
        const response: any = await controller.getUsersByServerId(server_id);
        return res.send(response);
    }
    const response: any = await controller.getUsers();
    return res.send(response);
});
export default usersRouter;