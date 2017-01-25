import { Injectable } from '@angular/core';
import { UtilsService } from './utilsService';

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

}
