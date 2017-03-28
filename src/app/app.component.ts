import { Component, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LocalStorageService } from '../services/localStorage';
import { FormsService } from '../services/formsService';
import { ModalService } from '../services/modalService';
import { SigninService } from '../services/signinService';
import { SinsService } from '../services/sinsService';
import { Utils } from '../services/utilsService';
import { FormDefinition } from '../models/formDefinition';
import { Form } from '../models/form';
import { Events } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { REGISTER, LOGIN } from '../reducers/userstatus';
// import { SETUSER } from '../reducers/user';
import { User } from '../models/user';
import { UserStatus } from '../models/userStatus';
import { Sin } from '../models/sin';
import { HomePage } from '../pages/home/home';
// import { SinAbsolutionPage } from '../pages/sin-absolution/sin-absolution';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  // private pages: Array<{ title: string, component: any }>;
  private modelLogin: Promise<Form>;
  private modelRegister: Promise<Form>;
  private signinData: any = {};
  private userStatus: UserStatus;
  public REGISTER: string = REGISTER;
  public LOGIN: string = LOGIN;
  public user: User;
  public sinsCount: number = 0;
  public sinsTotal: number = 0;
  public popularSin: Sin;

  constructor(
    private localStorageService: LocalStorageService,
    public platform: Platform,
    private translate: TranslateService,
    public menu: MenuController,
    private events: Events,
    private formsService: FormsService,
    private modalService: ModalService,
    private sinsService: SinsService,
    private store: Store<string>,
    private signinService: SigninService
  ) {
    this.initializeApp();

    this.store.select('userStatus').subscribe((value: UserStatus) => {
      this.userStatus = value;
    });

    this.store.select('user').subscribe((user: User) => {
      this.user = user;
      if (user && user.sins) {
        var sins = Utils.objectToArrayStoreKeys(user.sins);
        this.sinsCount = sins.length;
        this.sinsTotal = sins.reduce((x, y) => x + y.value, 0);

        // compute user's popular sin 
        var tmp = {};
        sins.map(x => {
          if (!tmp[x.sinId])
            tmp[x.sinId] = { count: 0 };

          tmp[x.sinId].count++;
        });
        var sinId = Utils.objectToArrayStoreKeys(tmp).sort(x => x.count)[0].key;
        this.sinsService.getById(sinId).then(sin => {
          this.popularSin = sin;
        });
      }
    });


    var userLang = navigator.language.split('-')[0];
    userLang = /(cz|en)/gi.test(userLang) ? userLang : 'en';
    userLang = 'cz'; //TODO: remove for production
    translate.setDefaultLang(userLang);
    translate.use(userLang);
    this.localStorageService.set('lang', userLang);

    var loginFormDefinition = <FormDefinition>{
      fields: [
        {
          type: 'text',
          label: 'signin_username',
          name: 'username',
          required: "true"
        }, {
          type: 'password',
          label: 'signin_password',
          name: 'password',
          required: "true"
        }
      ]
    };
    var registerFormDefinition = <FormDefinition>{
      fields: [
        {
          type: 'text',
          label: 'signin_username',
          name: 'username',
          required: "true"
        }, {
          type: 'password',
          label: 'signin_password',
          name: 'password',
          required: "true"
        },
        {
          type: 'password',
          label: 'signin_password_repeat',
          name: 'password_repeat',
          required: "true"
        },
        {
          type: 'email',
          label: 'signin_email',
          name: 'email',
          required: "true"
        }
      ]
    };

    this.modelLogin = this.formsService.getNewFormModel(loginFormDefinition, true, this.signinData)
    this.modelRegister = this.formsService.getNewFormModel(registerFormDefinition, true, this.signinData)
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
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  login() {
    if (this.userStatus.type == LOGIN) {
      this.modelLogin.then(data => {
        if (data.authForm.valid) {
          this.modalService.showWait(this.signinService.signin(this.signinData.username, this.signinData.password)).then((user) => {
          },
            () => {
              this.modalService.createToast('signin_auth_failed').present();
            });
        }
      });
    } else {
      this.store.dispatch({ type: LOGIN });
    }
  }

  signout() {
    this.signinService.signout();
  }

  register() {
    if (this.userStatus.type == REGISTER) {
      this.modelRegister.then(data => {
        if (data.authForm.valid) {
          this.modalService.showWait(this.signinService.register(this.signinData.username, this.signinData.password, this.signinData.passwordRepeat, this.signinData.email)).then((user) => {
            this.modalService.createToast('signin_registration_success').present();
          }, () => {
            this.modalService.createToast('signin_registration_failed').present();
          });
        }
      });
    } else {
      this.store.dispatch({ type: REGISTER });
    }
  }

  changePublic() {
    this.signinService.changePublic(this.user);
  }
}
