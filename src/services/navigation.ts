import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Nav } from 'ionic-angular';
import { AppNode, NavigationType } from '../models/appNode';
import { NAVIGATE } from '../reducers/navigation';

@Injectable()
export class Navigation {
    nodes: Array<AppNode>;
    menuNodes: Array<AppNode>;
    nav: Nav;
    private store: Store<AppNode>;
    private currentNode: AppNode;

    constructor() {
        this.nodes = [];
        this.menuNodes = [];
    }

    public init(nav: Nav, store: Store<AppNode>) {
        this.store = store;
        this.nav = nav;

        this.store.select('nav')
            .subscribe((node: AppNode) => {
                if (this.nav !== undefined && node !== undefined && node != null && node.component !== undefined) {
                    this.currentNode = node;

                    if (node.navigationType === NavigationType.Push) {
                        if (node.animate !== undefined) {
                            this.nav.push(node.component, '', { animate: node.animate });
                            delete node.animate;
                        } else {
                            this.nav.push(node.component);
                        }
                    } else if (node.navigationType === NavigationType.SetRoot) {
                        this.nav.setRoot(node.component);
                    } else if (node.navigationType === NavigationType.SetRootAndNavigate) {
                        this.nav.setPages([{ page: node.rootNode.component }, { page: node.component }]).then(() => {
                            console.log(this.nav);
                        }, (e) => {
                            console.log(e);
                        });
                    } else if (node.navigationType === NavigationType.Pop) {
                        if (!this.nav.canGoBack()) {
                            this.nav.insert(0, node.component).then(() => {
                                this.nav.pop();
                            });
                        } else {
                            this.nav.pop();
                        }
                    }
                }
            });
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

    public setCurrentNode(node: AppNode) {
        this.currentNode = node;
    }

    public getCurrentNode(): AppNode {
        return this.currentNode;
    }

    public navigateToNode(node: AppNode) {
        node.navigationType = NavigationType.SetRoot;
        this.navigate(node);
    }

    public setRootAndNavigateToNode(rootNode: AppNode, navigateNode: AppNode) {
        navigateNode.navigationType = NavigationType.SetRootAndNavigate;
        navigateNode.rootNode = rootNode;
        this.navigate(navigateNode);
    }

    public pushByAction(id: String) {
        var node = this.currentNode.nodes.get(id);
        node.navigationType = NavigationType.Push;
        this.navigate(node);
    }

    public pushToNode(node: AppNode) {
        node.navigationType = NavigationType.Push;
        this.navigate(node);
    }

    public navigateByAction(id: String) {
        var node = this.currentNode.nodes.get(id);
        node.navigationType = NavigationType.SetRoot;
        this.navigate(node);
    }

    public pop() {
        var node = this.currentNode.prev;
        node.navigationType = NavigationType.Pop;
        this.navigate(node);
    }

    private navigate(node: AppNode) {
        if (node !== undefined && this.store !== undefined && !this.nav.isTransitioning()) {
            this.store.dispatch({ type: NAVIGATE, payload: node });
        }
    }
}
