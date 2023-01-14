import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { logSuccess } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    public async getMessage(@Query() name?: string): Promise<BasicResponse> {
        logSuccess('[/api/hello] Get Request');

        return {
            message: `Hola ${name || "world"}`
        }
    }
}