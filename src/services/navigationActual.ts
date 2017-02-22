import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Nav } from 'ionic-angular';
import { AppNode } from '../models/appNode';
import { Navigation } from '../services/navigation';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Injectable()
export class NavigationActual {
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
        this.homeNode = new AppNode('home', this.translate.instant('home_title'), HelloIonicPage);
        // this.homeNode.nodes.set('actionClick', this.tilesNode);

        this.navigation.setNodes([
            this.homeNode
        ]);
        this.navigation.setMenuNodes([this.homeNode]);
        //    this.navigation.setCurrentNode(this.homeNode);
    }
}
