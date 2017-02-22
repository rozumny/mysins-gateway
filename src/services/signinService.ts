import { Injectable } from '@angular/core';
import { Utils } from './utilsService';
import { LocalStorageService } from './localStorage';
import { User } from '../models/user';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Store } from '@ngrx/store';
import { REGISTER, LOGIN } from '../reducers/userstatus';
import { SETUSER } from '../reducers/user';

@Injectable()
export class SigninService {

    public apiUrl: string = "http://localhost:8080/api/users/";

    constructor(
        private utilsService: Utils,
        private localStorageService: LocalStorageService,
        private store: Store<string>,
        private http: Http
    ) {
    }

    signout(): Promise<void> {
        this.store.dispatch({ type: SETUSER, payload: null });
        this.store.dispatch({ type: LOGIN });
        return Promise.resolve();
    }

    signin(username: string, password: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            var user = new User();
            user.username = username;
            user.password = password;
            this.http.post(this.apiUrl + "/auth/", user)
                .map(res => res.json())
                .subscribe(response => {
                    this.store.dispatch({ type: SETUSER, payload: response });
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
                    this.store.dispatch({ type: SETUSER, payload: response });
                    resolve(response);
                }, error => {
                    reject(error);
                });
        });
    }

    changePublic(user: User) {
        return new Promise<void>((resolve, reject) => {
            var headers = new Headers();
            headers.append('x-access-token', user.token);
            var options = new RequestOptions({ headers: headers });

            this.http.put(this.apiUrl, user, options)
                .map(res => res.json())
                .subscribe(response => {
                    this.store.dispatch({ type: SETUSER, payload: user });
                    resolve();
                }, error => {
                    reject(error);
                });
        });
    }
}
