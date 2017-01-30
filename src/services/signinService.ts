import { Injectable } from '@angular/core';
import { UtilsService } from './utilsService';
import { LocalStorageService } from './localStorage';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class SigninService {

    public apiUrl: string = "http://localhost:8080/api/users/";

    constructor(
        private utilsService: UtilsService,
        private localStorageService: LocalStorageService,
        private http: Http
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
            this.http.post(this.apiUrl + "/auth/", user)
                .map(res => res.json())
                .subscribe(response => {
                    resolve(response);
                }, error => {
                    reject(error);
                });
        });
    }

    register(username: string, password: string, passwordRepeat: string, email: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            var user = new User();
            user.username = username;
            user.password = password;
            user.email = email;
            this.http.post(this.apiUrl, user)
                .map(res => res.json())
                .subscribe(response => {
                    resolve(response);
                }, error => {
                    reject(error);
                });
        });
    }
}
