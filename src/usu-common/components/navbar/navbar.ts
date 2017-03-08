import {Component, Input} from '@angular/core';
import {PopoverController, NavController, Platform, MenuController} from 'ionic-angular';
import {MenuPopover} from '../menuPopover/menuPopover';
import {Navigation} from '../../providers/navigation';
import {ConfigurationBusinessService} from '../../../businessServices/configuration/configurationBusinessService';
import {Events} from 'ionic-angular';

@Component({
    selector: 'navbar',
    templateUrl: 'build/usu-common/components/navbar/navbar.html'
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
        private configurationBusinessService: ConfigurationBusinessService,
        private menu: MenuController,
        private events: Events,
        public popoverCtrl: PopoverController,
        private navigation: Navigation) {
        this.displayRightMenuButton = true;
        this.isAndroid = this.platform.is('android');
        this.cordova = (<any>window).cordova;
        this.hasBackButton = this.navigation.getCurrentNode().prev != null;
    }

    ngOnInit() {
        if (!this.title) {
            this.title = this.navigation.getCurrentNode().title;
        }
    }

    open(ev) {
        let popover = this.popoverCtrl.create(MenuPopover);
        popover.present({
            ev: ev
        });
    }

    openMenu() {
        this.menu.open();
    }

    pop() {
        this.navigation.pop();
    }
}
