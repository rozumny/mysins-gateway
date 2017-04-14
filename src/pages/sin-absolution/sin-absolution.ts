import { Component, ViewChild, trigger, state, style, transition, animate } from '@angular/core';
import { CharityListPage } from '../../pages/charity-list/charity-list';
import { NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { SinsListPage } from '../../pages/sins-list/sins-list';
import { MemoryStorageService } from '../../services/memoryStorage';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'sin-absolution',
  templateUrl: 'sin-absolution.html',
  animations: [trigger('fade', [
    state('visible', style({
      opacity: 1
    })),
    state('invisible', style({
      opacity: 0
    })),
    transition('* => visible', animate('2000ms ease-in'))
  ])]
})
export class SinAbsolutionPage {
  @ViewChild(Content) content: Content;
  fadeState: String = 'invisible';
  public confirmed: boolean = false;
  public accumulation: string = "";

  constructor(
    private navigation: NavController,
    private translate: TranslateService,
    private memoryStorageService: MemoryStorageService,
    public navParams: NavParams
  ) {
    var basket = this.memoryStorageService.get('basket');
    var uniqueBasket = [];
    basket.forEach(x => {
      if (!uniqueBasket.find(y => {
        return y.sin.title == x.sin.title;
      })) {
        uniqueBasket.push(x);
      }
    });
    uniqueBasket.forEach(x => {
      if (this.accumulation.length > 0)
        this.accumulation += ", ";
      this.accumulation += this.translate.instant(x.sin.short);
    });

    if (!uniqueBasket.find(y => {
      return y.sin.title == this.navParams.data.sin.title;
    })) {
      if (this.accumulation.length > 0)
        this.accumulation += this.translate.instant("sin_absolution_and");

      this.accumulation += this.translate.instant(this.navParams.data.sin.short);
    }
  }

  absolution() {
    this.fadeState = 'visible';
    this.confirmed = true;
    this.content.resize();

    var a = (Math.floor(Math.random() * 6) + 4) * 1000;
    setTimeout(() => {
      this.navigation.push(CharityListPage, this.navParams.data).then(() => {
        this.confirmed = false;
        this.fadeState = 'invisible';
      });
    }, a);
  }

  goSinList() {
    var basket = this.memoryStorageService.get('basket');
    var data = this.navParams.data;
    basket.push({ total: data.total, sin: data.sin });

    this.navigation.setRoot(HomePage).then(() => {
      this.navigation.push(SinsListPage).then(() => {
        this.memoryStorageService.set('basket', basket);
      });
    });
  }
}
