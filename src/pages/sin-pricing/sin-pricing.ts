import { Component, Renderer, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { LocalStorageService } from '../../services/localStorage';
import { SinFinishPage } from '../../pages/sin-finish/sin-finish';

@Component({
  selector: 'sin-pricing',
  templateUrl: 'sin-pricing.html'
})
export class SinPricingPage {
  @ViewChild('totalInput') totalInput: ElementRef;
  public total: number;
  public charity: Charity;
  public language: string;

  constructor(
    private navigation: NavController,
    private localStorageService: LocalStorageService,
    private renderer: Renderer,
    public navParams: NavParams
  ) {
    this.localStorageService.get('lang').then(lang => {
      this.language = lang;
      this.charity = this.navParams.data.charity;
      this.total = this.navParams.data.total;
    });
  }

  confirm() {
    //TODO: insert into basket
    this.navigation.push(SinFinishPage, { charity: this.charity });
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
