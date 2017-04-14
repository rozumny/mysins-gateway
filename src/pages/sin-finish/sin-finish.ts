import { Component, Renderer } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalStorageService } from '../../services/localStorage';
import { HomePage } from '../../pages/home/home';
import { SocialSharing } from 'ionic-native';
import { TranslateService } from 'ng2-translate';
import { Charity } from '../../models/charity';

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
    private translate: TranslateService,
    public navParams: NavParams
  ) {
    this.localStorageService.get('lang').then(lang => {
      this.language = lang;
      this.charity = this.navParams.data.charity;
    });
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
