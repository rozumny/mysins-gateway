import { Component, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LocalStorageService } from '../services/localStorage';
import { ModalService } from '../services/modalService';
import { SinsService } from '../services/sinsService';
import { Utils } from '../services/utilsService';
import { Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
// import { SinAbsolutionPage } from '../pages/sin-absolution/sin-absolution';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  constructor(
    private localStorageService: LocalStorageService,
    public platform: Platform,
    private translate: TranslateService,
    public menu: MenuController,
    private events: Events,
    private modalService: ModalService,
    private sinsService: SinsService
  ) {
    this.initializeApp();

    var userLang = navigator.language.split('-')[0];
    userLang = /(cz|en)/gi.test(userLang) ? userLang : 'en';
    userLang = 'cz'; //TODO: remove for production
    translate.setDefaultLang(userLang);
    translate.use(userLang);
    this.localStorageService.set('lang', userLang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
