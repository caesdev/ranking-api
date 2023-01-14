import { BasicResponse } from "@/controllers/types";
import express, { Request, Response } from "express";
import { HelloController } from "../controllers/HelloController";
import { logInfo } from "../utils/logger";

let helloRouter = express.Router();

// http://localhost:8000/api/hello?name=Carlos/
helloRouter.route('/').get(async (req: Request, res: Response) => {
    let name: any = req?.query.name;
    logInfo(`Query Param: ${name}`);
    const controller: HelloController = new HelloController();
    const response: BasicResponse = await controller.getMessage(name);
    return res.send(response);
});
export default helloRouter;