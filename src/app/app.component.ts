import { Type, Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { NavigationActual } from '../services/navigationActual';
import { Navigation } from '../services/navigation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) private nav: Nav;

  private pages: Array<{ title: string, component: any }>;
  private rootPage: Type<any>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private navigationActual: NavigationActual,
    private navigation: Navigation
  ) {
    this.initializeApp();

    this.rootPage = HelloIonicPage;
    this.pages = this.navigation.getMenuNodes();
    this.navigationActual.setup(this.nav);
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
