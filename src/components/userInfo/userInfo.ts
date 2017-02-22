import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';

@Component({
    selector: 'userinfo',
    templateUrl: 'userInfo.html'
})
export class UserInfo {
    public user: User;

    constructor(
        private events: Events,
        private store: Store<User>,
        private translate: TranslateService
    ) {
    }

    ngOnInit() {
        this.store.select('user').subscribe((value: User) => {
            this.user = value;
        });
    }
}
