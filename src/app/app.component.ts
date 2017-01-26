import { Type, Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { NavigationActual } from '../services/navigationActual';
import { Navigation } from '../services/navigation';
import { LocalStorageService } from '../services/localStorage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private pages: Array<{ title: string, component: any }>;
  private rootPage: Type<any>;

  constructor(
    private localStorageService: LocalStorageService,
    public platform: Platform,
    public menu: MenuController,
    private navigationActual: NavigationActual,
    private navigation: Navigation
  ) {
    this.initializeApp();

    this.pages = this.navigation.getMenuNodes();
    setTimeout(() => {
      this.navigationActual.setup(this.nav);

      this.localStorageService.getObject('nav', true).then((nodeInLocalStorage) => {
        if (!nodeInLocalStorage || nodeInLocalStorage.length === 0) {
          this.navigation.setRootToNode(this.navigation.nodes.find(x => x.id === 'home'));
        } else {
          var n = this.navigation.getCurrentNode();
          if (n !== undefined && n !== this.navigation.nodes[0]) {
            //  this.signinService.isSignedIn().then((isSignedIn) => {
            //     if (isSignedIn) {
            this.navigation.initNode(n);
            //     }
            //  });
          }
        }
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
