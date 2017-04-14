import { Component, Renderer, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { LocalStorageService } from '../../services/localStorage';
import { SinFinishPage } from '../../pages/sin-finish/sin-finish';
import { MemoryStorageService } from '../../services/memoryStorage';

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
