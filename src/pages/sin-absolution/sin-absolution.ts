import { Component } from '@angular/core';
// import { SinsService } from '../../services/sinsService';
// import { Utils } from '../../services/utilsService';
// import { Sin, Question } from '../../models/sin';
import { CharityListPage } from '../../pages/charity-list/charity-list';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'sin-absolution',
  templateUrl: 'sin-absolution.html'
})
export class SinAbsolutionPage {

  public confirmed: boolean = false;

  constructor(
    private navigation: NavController,
    public navParams: NavParams
  ) {
  }

  absolution() {
    this.confirmed = true;
    setTimeout(() => {
      this.navigation.push(CharityListPage, this.navParams.data);
    }, 2000);
  }
}
