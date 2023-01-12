import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { logSuccess } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endpoint to retrieve a message "Hello {name} in JSON"
     * @param { string | undefined } name Name of user to be greeted
     * @returns { BasicResponse } Promise of BasicResponse
     */
    @Get("/")
    public async getMessage(@Query() name?: string): Promise<BasicResponse> {
        logSuccess('[/api/hello] Get Request');

        return {
            message: `Hola ${name || "world"}`
        }
    }
}