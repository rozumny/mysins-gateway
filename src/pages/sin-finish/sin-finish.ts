import { Component, Renderer } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalStorageService } from '../../services/localStorage';
import { HomePage } from '../../pages/home/home';
import { SocialSharing } from 'ionic-native';
import { TranslateService } from 'ng2-translate';
import { Charity } from '../../models/charity';
import { Store } from '@ngrx/store';
// import { User } from '../../models/user';
import { SigninService } from '../../services/signinService';
import { FileService } from '../../services/fileService';
import { ModalService } from '../../services/modalService';

@Component({
  selector: 'sin-finish',
  templateUrl: 'sin-finish.html'
})
export class SinFinishPage {
  public language: string;
  public charity: Charity;

  constructor(
    private navigation: NavController,
    private localStorageService: LocalStorageService,
    private renderer: Renderer,
    private modalService: ModalService,
    private signinService: SigninService,
    private fileService: FileService,
    private store: Store<string>,
    private translate: TranslateService,
    public navParams: NavParams
  ) {
    this.localStorageService.get('lang').then(lang => {
      this.language = lang;
      this.charity = this.navParams.data.charity;
    });

    //update sins count
    this.navParams.data.sins.forEach(x => {
      this.signinService.user.sins.push(x);
    });

    this.signinService.user.total += this.navParams.data.total;

    this.modalService.showWait(Promise.all([
      this.signinService.changeUser(this.signinService.user),
      new Promise<void>((resolve, reject) => {
        this.fileService.get("total").then(total => {
          if (total)
            total += this.navParams.data.total;
          else
            total = this.navParams.data.total;
          this.fileService.set("total", total).then(() => {
            resolve();
          });
        });
      })
    ]));
  }

  share() {
    SocialSharing.canShareVia('facebook').then(() => {
      SocialSharing.shareViaFacebook(this.translate.instant('sin_finish_share_message') + this.charity.title[this.language]).then(() => {
      }).catch(() => {
      });
    }).catch(() => {
    });

  }

  goHome() {
    this.navigation.setRoot(HomePage);
  }
}
