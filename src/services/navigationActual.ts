import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Nav } from 'ionic-angular';
import { AppNode } from '../models/appNode';
import { Navigation } from '../services/navigation';

import { SinsListPage } from '../pages/sins-list/sins-list';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Injectable()
export class NavigationActual {
    sinsListNode: AppNode;

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
        this.sinsListNode = new AppNode('home', this.translate.instant('home_title'), SinsListPage);
        // this.homeNode.nodes.set('actionClick', this.tilesNode);

        this.navigation.setNodes([
            this.sinsListNode
        ]);
        this.navigation.setMenuNodes([this.sinsListNode]);
        //    this.navigation.setCurrentNode(this.homeNode);
    }
}
