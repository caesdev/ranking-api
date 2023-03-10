import { userEntity } from "../entities/User.entity";
import { logError, logSuccess } from "../../utils/logger";

// * CRUD

/**
 * Method to obatin all Users from Collection "Users" in Mongo Server 
 */
export const getAllUsersByServerId = async (server_id: number): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();
        return await userModel.find({ server: server_id }, { isDelete: false });
    } catch (error) {
        logError(`[ORM ERROR]: Getting all users: ${error}`);
    }
}

export const getAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();
        return await userModel.find({ isDelete: false });
    } catch (error) {
        logError(`[ORM ERROR]: Getting all users: ${error}`);
    }
}