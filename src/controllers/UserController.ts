import { Get, Route, Tags } from 'tsoa';
import { IUserController } from './interfaces';
import { logSuccess, logError } from '../utils/logger';

// ORM - Users Collection
import { getAllUsers, getAllUsersByServerId } from '../domain/orm/User.orm';

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
    /**
     * Endpoint to retrieve a list Users Collection from database
     */
    public async getUsers(): Promise<any> {
        logSuccess('[/api/users] Get all users requests')
        const response = await getAllUsersByServerId();
        return response
    }
}
