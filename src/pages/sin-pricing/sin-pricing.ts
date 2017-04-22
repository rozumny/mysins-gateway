import { Component, Renderer, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { LocalStorageService } from '../../services/localStorage';
import { SinFinishPage } from '../../pages/sin-finish/sin-finish';
import { MemoryStorageService } from '../../services/memoryStorage';
import { Utils } from '../../services/utilsService';
import { SigninService } from '../../services/signinService';
import { ModalService } from '../../services/modalService';

@Component({
  selector: 'sin-pricing',
  templateUrl: 'sin-pricing.html'
})
export class SinPricingPage {
  @ViewChild('totalInput') totalInput: ElementRef;
  public total: number = 0;
  public charity: Charity;
  public language: string;

  constructor(
    private navigation: NavController,
    private localStorageService: LocalStorageService,
    private renderer: Renderer,
    public menuCtrl: MenuController,
    private modalService: ModalService,
    private signinService: SigninService,
    private memoryStorageService: MemoryStorageService,
    public navParams: NavParams
  ) {
    this.localStorageService.get('lang').then(lang => {
      this.language = lang;
      this.charity = this.navParams.data.charity;
    });

    var basket = this.memoryStorageService.get('basket');
    var data = this.navParams.data;

    basket.forEach(x => {
      this.total += x.total;
    });
    this.total += data.total;
  }

  confirm() {
    if (!this.signinService.user) {
      this.modalService.createToast("signin_please_login").present();
      this.menuCtrl.open();
    } else {
      var basket = this.memoryStorageService.get('basket');
      var b = Utils.deepCloneObject(basket);
      b.push({ sin: this.navParams.data.sin });
      b = b.map(x => x.sin.key);
      this.navigation.setRoot(SinFinishPage, { charity: this.charity, sins: b, total: this.total });
    }
  }

  openTotal() {
    this.renderer.invokeElementMethod(this.totalInput.nativeElement, 'dispatchEvent', [
      new MouseEvent('click', { bubbles: true })
    ]);
  }

  add() {
    if (this.total + 50 < this.charity.total)
      this.total += 50;
  }

  remove() {
    if (this.total - 50 > 0)
      this.total -= 50;
  }
}
