import { Action } from '@ngrx/store';
import { UserStatus } from '../models/userStatus';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
// export const SIGNIN = 'SIGNIN';

export const userStatus = (status: UserStatus = { type: LOGIN }, action: Action) => {
    switch (action.type) {
        // case SIGNIN:
        //     return action.type;
        case LOGIN:
            return { type: action.type };
        case REGISTER:
            return { type: action.type };
        default:
            return status;
    }
};
