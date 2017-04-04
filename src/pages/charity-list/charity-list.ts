import { Component, ViewChild } from '@angular/core';
import { CharityService } from '../../services/charityService';
import { Utils } from '../../services/utilsService';
import { SinPricingPage } from '../../pages/sin-pricing/sin-pricing';
import { CharityCategory, Charity } from '../../models/charity';
import { Slides, Content } from 'ionic-angular';
import { LocalStorageService } from '../../services/localStorage';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'charity-list',
  templateUrl: 'charity-list.html'
})
export class CharityListPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  public categories: CharityCategory[];
  public charities: Charity[];
  public language: string;
  public charityIndex: number = 0;

  constructor(
    private localStorageService: LocalStorageService,
    public navParams: NavParams,
    private navigation: NavController,
    private charityService: CharityService
  ) {
    this.localStorageService.get('lang').then(lang => {
      this.language = lang;
      this.charityService.getCategories().then(categories => {
        this.categories = Utils.objectToArrayStoreKeys(categories);
        this.charityService.getCharitiesByType(this.categories[0].key).then(x => {
          this.charities = x;
        });
      });
    });
  }

  selectCharity() {
    this.navigation.push(SinPricingPage, { total: this.navParams.data.total, charity: this.charities[this.charityIndex] });
  }

  selectCategory(category: CharityCategory) {
    this.charityService.getCharitiesByType(category.key).then(x => {
      this.charities = x;
      this.charityIndex = 0;
    });
  }

  slideChanged() {
    var index = this.slides.getActiveIndex();
    if (index <= this.charities.length - 1) {
      this.charityIndex = index;
    }
  }
}
