import { Injectable } from '@angular/core';
// import { User } from '../models/user';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class FileService {

    // public apiUrl: string = "http://rm2kofola.rollingmobile.cz:8082/api/files/";
    public apiUrl: string = "http://api.sugarman.cz/api/files/";
    // public apiUrl: string = "http://localhost:8080/api/files/";

    constructor(
        private http: Http
    ) {
    }

    get(key: string): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            var headers = new Headers();
            var options = new RequestOptions({ headers: headers });

            this.http.get(this.apiUrl + key, options)
                .map(res => res.json())
                .subscribe(response => {
                    resolve(response.value);
                }, error => {
                    reject(error);
                });
        });
    }

    set(key: string, value: any): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            var headers = new Headers();
            var options = new RequestOptions({ headers: headers });

            this.http.put(this.apiUrl + key, { value: value }, options)
                .map(res => res.json())
                .subscribe(response => {
                    resolve();
                }, error => {
                    reject(error);
                });
        });
    }
}
