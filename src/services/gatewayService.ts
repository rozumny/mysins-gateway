import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class GatewayService {

    // public apiUrl: string = "http://rm2kofola.rollingmobile.cz:8082/api/users";
    public apiUrl: string = "http://localhost:8082/api/users";


    constructor(
        private http: Http
    ) {
    }

    getToken(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            var headers = new Headers();
            var options = new RequestOptions({ headers: headers });

            this.http.get(this.apiUrl + "/client_token", options)
                .map(res => res.json())
                .subscribe(response => {
                    resolve(response.value);
                }, error => {
                    reject(error);
                });
        });
    }

    checkout(nonce: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            var headers = new Headers();
            var options = new RequestOptions({ headers: headers });

            this.http.post(this.apiUrl + "/checkout", { nonce: nonce }, options)
                .map(res => res.json())
                .subscribe(response => {
                    resolve(response.msg);
                }, error => {
                    reject(error);
                });
        });
    }
}
