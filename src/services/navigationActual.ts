import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Nav } from 'ionic-angular';
import { AppNode } from '../models/appNode';
import { Navigation } from '../services/navigation';

import { SinsListPage } from '../pages/sins-list/sins-list';
import { HomePage } from '../pages/home/home';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Injectable()
export class NavigationActual {
    sinsListNode: AppNode;
    homeNode: AppNode;

    constructor(
        private store: Store<AppNode>,
        private translate: TranslateService,
        private navigation: Navigation) {
    }

    public setup(nav: Nav) {
        this.init();
        this.navigation.init(nav, this.store);
    }

    private init() {
        this.homeNode = new AppNode('home', this.translate.instant('home_title'), HomePage);
        this.sinsListNode = new AppNode('sinsList', this.translate.instant('home_title'), SinsListPage);

        this.homeNode.nodes.set('actionClick', this.sinsListNode);
        this.sinsListNode.prev = this.homeNode;

        this.navigation.setNodes([
            this.homeNode,
            this.sinsListNode
        ]);
        // this.navigation.setMenuNodes([this.sinsListNode]);
        //    this.navigation.setCurrentNode(this.homeNode);
    }
}
