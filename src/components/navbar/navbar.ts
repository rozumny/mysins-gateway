import { Component, Input } from '@angular/core';
import { NavController, Platform, MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.html'
})
export class Navbar {
    @Input() displayRightMenuButton: boolean = true;
    @Input() title: string;
    isAndroid: boolean;
    cordova: any;
    hasBackButton: boolean = false;

    constructor(
        private nav: NavController,
        private platform: Platform,
        private menu: MenuController,
        private events: Events) {
        this.isAndroid = this.platform.is('android');
        this.cordova = (<any>window).cordova;
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.open();
    }
}
