import { Type, Component, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { NavigationActual } from '../services/navigationActual';
import { Navigation } from '../services/navigation';
import { LocalStorageService } from '../services/localStorage';
import { FormsService } from '../services/formsService';
import { FormDefinition } from '../models/formDefinition';
import { Form } from '../models/form';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private pages: Array<{ title: string, component: any }>;
  private rootPage: Type<any>;
  private model: Promise<Form>;

  constructor(
    private localStorageService: LocalStorageService,
    public platform: Platform,
    private translate: TranslateService,
    public menu: MenuController,
    private navigationActual: NavigationActual,
    private navigation: Navigation,
    private formsService: FormsService
  ) {
    this.initializeApp();

    var userLang = navigator.language.split('-')[0];
    userLang = /(cz|en)/gi.test(userLang) ? userLang : 'en';
    userLang = 'cz'; //TODO: remove for production
    translate.setDefaultLang(userLang);
    translate.use(userLang);

    var formDefinition = <FormDefinition>{
      fields: [
        {
          type: 'text',
          label: 'signin_username',
          name: 'username'
        }, {
          type: 'password',
          label: 'signin_password',
          name: 'password'
        },
        {
          type: 'password',
          label: 'signin_password_repeat',
          name: 'password_repeat',
          onhide: 'onregister'
        },
        {
          type: 'text',
          label: 'signin_email',
          name: 'email',
          onhide: 'onregister'
        },
        // {
        //   type: 'button',
        //   label: 'signin_login',
        //   name: 'login',
        //   onClick: 'login'
        // },
        // {
        //   type: 'button',
        //   label: 'signin_register',
        //   name: 'register',
        //   onClick: 'register'
        // }
        // // ,
        // // {
        // //   type: 'button',
        // //   label: 'signin_forgot_password',
        // //   name: 'forgot_password',
        // //   onClick: 'forgot_password'
        // // },
      ]
    }

    this.model = this.formsService.getNewFormModel(formDefinition, false)


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
