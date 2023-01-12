import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?: string): Promise<BasicResponse>
}

export interface IUserController {
    // Read all users from database "StareBot"
    getUsers(): Promise<any>
}