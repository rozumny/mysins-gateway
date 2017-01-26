import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Nav } from 'ionic-angular';
import { AppNode, NavigationType } from '../models/appNode';
import { PUSH, POP, POPTOROOT, POPTOROOTANDNAVIGATE, INIT, SET_CURRENT_NODE_STATE } from '../reducers/navigation';

@Injectable()
export class Navigation {
    nodes: Array<AppNode>;
    menuNodes: Array<AppNode>;
    nav: Nav;
    private store: Store<AppNode>;
    private navigationHistory: AppNode[];

    constructor() {
        this.nodes = [];
        this.menuNodes = [];
    }

    public init(nav: Nav, store: Store<AppNode>) {
        this.store = store;
        this.nav = nav;

        this.store.select('nav')
            .subscribe((navigationHistory: AppNode[]) => {
                console.log(navigationHistory);
                this.navigationHistory = navigationHistory;

                if (!this.navigationHistory)
                    return;

                var currentNode = this.getCurrentNode();

                if (this.nav !== undefined && currentNode !== undefined && currentNode != null && currentNode.component !== undefined) {
                    if (currentNode.navigationType === NavigationType.Push) {
                        if (currentNode.animate !== undefined) {
                            this.nav.push(currentNode.component, '', { animate: currentNode.animate });
                            delete currentNode.animate;
                        } else {
                            this.nav.push(currentNode.component);
                        }
                    } else if (currentNode.navigationType === NavigationType.SetRoot) {
                        this.nav.setRoot(currentNode.component);
                    } else if (currentNode.navigationType === NavigationType.SetRootAndNavigate) {
                        this.nav.setPages([{ page: currentNode.rootNode.component }, { page: currentNode.component }]).then(() => {
                            // console.log(this.nav);
                        }, (e) => {
                            // console.log(e);
                        });
                    } else if (currentNode.navigationType === NavigationType.Pop) {
                        if (!this.nav.canGoBack()) {
                            this.nav.insert(0, currentNode.component).then(() => {
                                this.nav.pop();
                            });
                        } else {
                            this.nav.pop();
                        }
                    }
                }
            });
    }

    public getNavigationHistory() {
        return this.navigationHistory;
    }

    public getNodeById(id: string): AppNode {
        return this.nodes.find(x => x.id === id);
    }

    public setNodes(nodes: AppNode[]) {
        this.nodes = nodes;
    }

    public setMenuNodes(nodes: AppNode[]) {
        this.menuNodes = nodes;
    }

    public getMenuNodes(): AppNode[] {
        return this.menuNodes;
    }

    public getCurrentNode(): AppNode {
        if (!this.navigationHistory || this.navigationHistory.length == 0)
            return undefined;

        var currentNode = this.navigationHistory[this.navigationHistory.length - 1];
        var node = this.nodes.find(x => x.id === currentNode.id);
        currentNode.component = node.component;
        currentNode.nodes = node.nodes;
        return currentNode;
    }

    public setRootToNode(node: AppNode) {
        node.navigationType = NavigationType.SetRoot;
        this.store.dispatch({ type: POPTOROOT, payload: node });
    }

    public initNode(node: AppNode) {
        node.navigationType = NavigationType.SetRoot;
        this.store.dispatch({ type: INIT, payload: node });
    }

    public setRootAndNavigateToNode(rootNode: AppNode, navigateNode: AppNode) {
        navigateNode.navigationType = NavigationType.SetRootAndNavigate;
        navigateNode.rootNode = rootNode;
        this.store.dispatch({ type: POPTOROOTANDNAVIGATE, payload: navigateNode });
    }

    public pushByAction(id: String, state?: any) {
        var currentNode = this.navigationHistory[this.navigationHistory.length - 1];
        var node = currentNode.nodes.get(id);
        node.navigationType = NavigationType.Push;

        if (state)
            node.state = state;

        this.navigate(node);
    }

    public pushToNode(node: AppNode) {
        node.navigationType = NavigationType.Push;
        this.navigate(node);
    }

    public setRootByAction(id: String) {
        var currentNode = this.getCurrentNode();
        var node = currentNode.nodes.get(id);
        node.navigationType = NavigationType.SetRoot;
        this.store.dispatch({ type: POPTOROOT, payload: node });
    }

    public pop() {
        this.navigationHistory[this.navigationHistory.length - 2].navigationType = NavigationType.Pop; // hack
        this.store.dispatch({ type: POP });
    }

    private navigate(node: AppNode) {
        if (node !== undefined && this.store !== undefined && !this.nav.isTransitioning()) {
            this.store.dispatch({ type: PUSH, payload: node });
        }
    }

    public setCurrentNodeState(state: any) {
        this.store.dispatch({ type: SET_CURRENT_NODE_STATE, payload: state });
    }

    getCurrentNodeState(): any {
        return this.getCurrentNode().state;
    }
}
