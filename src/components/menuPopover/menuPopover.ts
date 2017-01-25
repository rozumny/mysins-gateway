import { Component } from '@angular/core';
import { Navigation } from '../../services/navigation';
import { AppNode } from '../../models/appNode';
import { SigninService } from '../../services/signinService';
import { ViewController, MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
    selector: 'menuPopover',
    templateUrl: 'menuPopover.html'
})
export class MenuPopover {
    pages: Array<AppNode>;

    hasChanges: boolean = false;

    constructor(
        private navigation: Navigation,
        private menu: MenuController,
        private events: Events,
        private viewCtrl: ViewController,
        private signinService: SigninService) {
        this.pages = this.navigation.getMenuNodes();
    }

    ngOnInit() {

    }

    public openPage(node: AppNode): void {
        var home = this.navigation.getNodeById('home');
        if (home) {
            this.viewCtrl.dismiss().then(() => {
                if (home === node) {
                    this.navigation.navigateToNode(home);
                } else {
                    this.navigation.setRootAndNavigateToNode(home, node);
                }
            });
        }


    };

    public logout(): void {
        this.signinService.signout().then(() => {
            var signin = this.navigation.nodes.find(node => node.title === 'Signin');
            if (signin) {
                this.viewCtrl.dismiss();
                this.navigation.navigateToNode(signin);
            }
        }, () => {
            // TODO: show error message
        });
    };
}

