import { Action } from '@ngrx/store';
import { AppNode } from '../models/appnode';

export const PUSH = 'push';
export const POP = 'pop';
export const POPTOROOT = 'poptoroot';
export const POPTOROOTANDNAVIGATE = 'poptorootandnavigate';
export const INIT = 'init';
export const SET_CURRENT_NODE_STATE = 'setcurrentnodestate';

export const nav = (appNode: AppNode[] = [], action: Action) => {
    switch (action.type) {
        case PUSH:
            return [
                ...appNode,
                action.payload
            ];
        case POP:
            appNode.splice(appNode.length - 1);
            return appNode.map(x => { return x; });
        case POPTOROOT:
            return [action.payload];
        case POPTOROOTANDNAVIGATE:
            return [action.payload.rootNode, action.payload];
        case INIT:
            return appNode;
        case SET_CURRENT_NODE_STATE:
            var newAppNode = appNode.map(x => { return x; });
            var currentNode = newAppNode[newAppNode.length - 1];
            currentNode.state = action.payload;
            return newAppNode;
        default:
            return appNode;
    }
};
