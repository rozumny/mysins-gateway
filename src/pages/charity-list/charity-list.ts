import { Component, ViewChild } from '@angular/core';
import { CharityService } from '../../services/charityService';
import { Utils } from '../../services/utilsService';
// import { Charity, CharityCategory } from '../../models/charity';
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
  public charityIndex: number;

  constructor(
    private localStorageService: LocalStorageService,
    public navParams: NavParams,
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

  }

  slideChanged() {
    var index = this.slides.getActiveIndex();
    if (index <= this.charities.length - 1) {
      this.charityIndex = index;
    }
  }
}
