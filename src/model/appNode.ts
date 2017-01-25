import {} from 'ionic-angular';

export enum NavigationType {
    Push,
    SetRoot,
    SetRootAndNavigate,
    Pop,
    PopBackButton
}

export class AppNode {
    prev: AppNode;
    next: AppNode;
    rootNode: AppNode;
    animate: boolean;
    nodes: Map<String, AppNode>;
    public navigationType: NavigationType;

    constructor(public id: string, public title: string, public component: any) {
        this.nodes = new Map<String, AppNode>();
    }

    public setPrevNode(prev: AppNode) {
        this.prev = prev;
    }

    public setNextNode(next: AppNode) {
        this.next = next;
    }

    public setNodes(nodes: Map<String, AppNode>) {
        this.nodes = nodes;
    }
}
