import { Component, Input } from '@angular/core';
import { PopoverController, NavController, Platform, MenuController } from 'ionic-angular';
import { Navigation } from '../../services/navigation';
import { Events } from 'ionic-angular';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.html'
})
export class Navbar {
    @Input() displayRightMenuButton: boolean;
    @Input() title: string;
    isAndroid: boolean;
    cordova: any;
    hasBackButton: boolean = false;

    constructor(
        private nav: NavController,
        private platform: Platform,
        private menu: MenuController,
        private events: Events,
        public popoverCtrl: PopoverController,
        private navigation: Navigation) {
        this.displayRightMenuButton = true;
        this.isAndroid = this.platform.is('android');
        this.cordova = (<any>window).cordova;
        this.hasBackButton = this.navigation.getNavigationHistory().length > 1;
    }

    ngOnInit() {
        if (!this.title) {
            this.title = this.navigation.getCurrentNode().title;
        }
    }

    openMenu() {
        this.menu.open();
    }

    pop() {
        this.navigation.pop();
    }
}
