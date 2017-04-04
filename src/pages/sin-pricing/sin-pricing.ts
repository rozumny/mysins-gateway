import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { LocalStorageService } from '../../services/localStorage';

@Component({
  selector: 'sin-pricing',
  templateUrl: 'sin-pricing.html'
})
export class SinPricingPage {

  public total: number;
  public charity: Charity;
  public language: string;

  constructor(
    private navigation: NavController,
    private localStorageService: LocalStorageService,
    public navParams: NavParams
  ) {
    this.localStorageService.get('lang').then(lang => {
      this.language = lang;
      this.charity = this.navParams.data.charity;
      this.total = this.navParams.data.total;
    });
  }

  confirm() {
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
