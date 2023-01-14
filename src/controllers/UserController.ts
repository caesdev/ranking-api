import { Query, Route, Tags } from 'tsoa';
import { IUserController } from './interfaces';
import { logSuccess } from '../utils/logger';

import { getAllUsers, getAllUsersByServerId } from '../domain/orm/User.orm';

export class UserController implements IUserController {
    public async getUsers(): Promise<any> {
        logSuccess('[/api/users] Get all users requests')
        const response = await getAllUsers();
        return response
    }

    public async getUsersByServerId(@Query() server_id: number): Promise<any> {
        console.log('[/api/users] Get all users by server_id requests');
        const response = await getAllUsersByServerId(server_id);
        return response
    }
}
