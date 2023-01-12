import { UserController } from "../controllers/UserController";
import express, { Request, Response } from "express";

// Router from express
let usersRouter = express.Router();

// http://localhost:8000/api/users
usersRouter.route('/').get(async (req: Request, res: Response) => {
    // Controller Instance to execute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response: any = await controller.getUsers();
    // Send to client the response
    return res.send(response);
});

// Export Hello Router
export default usersRouter;