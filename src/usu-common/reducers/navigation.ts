import {Action} from '@ngrx/store';
import {AppNode} from '../model/appnode';

export const NAVIGATE = 'nav';

export const nav = (state: AppNode = null, action: Action) => {
    switch (action.type) {
        case NAVIGATE:
            return action.payload;
        default:
            return state;
    }
};
