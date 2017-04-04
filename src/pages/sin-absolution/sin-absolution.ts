import { Component, ViewChild } from '@angular/core';
import { CharityListPage } from '../../pages/charity-list/charity-list';
import { NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'sin-absolution',
  templateUrl: 'sin-absolution.html'
})
export class SinAbsolutionPage {
  @ViewChild(Content) content: Content;

  public confirmed: boolean = false;

  constructor(
    private navigation: NavController,
    public navParams: NavParams
  ) {
  }

  absolution() {
    this.confirmed = true;
    this.content.resize();
    setTimeout(() => {
      this.navigation.push(CharityListPage, this.navParams.data);
    }, 4000);
  }
}
