import { Injectable } from '@angular/core';
import { UtilsService } from './utilsService';
import { User } from '../models/user';

@Injectable()
export class SigninService {
    constructor(
        private utilsService: UtilsService
    ) {
    }

    signout() {
        return new Promise<any>(resolve => {
            resolve();
        });
    }

    signin(username: string, password: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            var user = new User();
            user.username = username;
            user.password = password;
            //TODO: get email from server
            resolve(user);
        });
    }

    register(username: string, password: string, passwordRepeat: string, email: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            var user = new User();
            user.username = username;
            user.password = password;
            user.email = email;
            resolve(user);
        });
    }
}
