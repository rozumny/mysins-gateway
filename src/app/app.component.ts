import { Component, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavigationActual } from '../services/navigationActual';
import { Navigation } from '../services/navigation';
import { LocalStorageService } from '../services/localStorage';
import { FormsService } from '../services/formsService';
import { ModalService } from '../services/modalService';
import { SigninService } from '../services/signinService';
import { FormDefinition } from '../models/formDefinition';
import { Form } from '../models/form';
import { Events } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { REGISTER, LOGIN } from '../reducers/userstatus';
import { SETUSER } from '../reducers/user';
import { User } from '../models/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private pages: Array<{ title: string, component: any }>;
  private model: Promise<Form>;
  private signinData: any = {};
  private userStatus: string;
  public REGISTER: string = REGISTER;
  public LOGIN: string = LOGIN;
  public user: User;

  constructor(
    private localStorageService: LocalStorageService,
    public platform: Platform,
    private translate: TranslateService,
    public menu: MenuController,
    private events: Events,
    private navigationActual: NavigationActual,
    private navigation: Navigation,
    private formsService: FormsService,
    private modalService: ModalService,
    private store: Store<string>,
    private signinService: SigninService
  ) {
    this.initializeApp();

    this.store.select('userStatus').subscribe((value: string) => {
      this.userStatus = value;
    });

    this.store.select('user').subscribe((user: User) => {
      this.user = user;
    });


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
          onshow: 'onregister',
          onhide: 'onlogin',
          hide: true
        },
        {
          type: 'text',
          label: 'signin_email',
          name: 'email',
          onshow: 'onregister',
          onhide: 'onlogin',
          hide: true
        }
      ]
    }

    this.model = this.formsService.getNewFormModel(formDefinition, true, this.signinData)


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

  login() {
    if (this.userStatus == LOGIN) {
      this.modalService.showWait(this.signinService.signin(this.signinData.username, this.signinData.password)).then((user) => {
        this.store.dispatch({ type: SETUSER, payload: user });
      },
        () => {
          this.modalService.createToast('signin_auth_failed').present();
        });
    } else {
      this.store.dispatch({ type: LOGIN });
      this.events.publish('onlogin');
    }
  }

  signout() {
    this.signinService.signout().then(() => {
      this.store.dispatch({ type: SETUSER, payload: null });
    });
  }

  register() {
    if (this.userStatus == REGISTER) {
      this.modalService.showWait(this.signinService.register(this.signinData.username, this.signinData.password, this.signinData.passwordRepeat, this.signinData.email)).then((user) => {
        this.store.dispatch({ type: SETUSER, payload: user });
      }, () => {
        this.modalService.createToast('signin_registration_failed').present();
      });
    } else {
      this.store.dispatch({ type: REGISTER });
      this.events.publish('onregister');
    }
  }
}
