import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { logSuccess } from "@/utils/logger";

export class HelloController implements IHelloController {
    public async getMessage(name?: string): Promise<BasicResponse> {
        logSuccess('[/api/hello] Get Request');

        return {
            message: `Hello ${name || "world"}`
        }
    }
}