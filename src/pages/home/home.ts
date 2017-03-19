import { Component } from '@angular/core';
import { SinsService } from '../../services/sinsService';
// import { Utils } from '../../services/utilsService';
import { SinsListPage } from '../../pages/sins-list/sins-list';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  public total: number = 1222;

  constructor(
    private navigation: NavController,
    private sinsService: SinsService
  ) {

  }

  openList() {
    this.navigation.push(SinsListPage);
  }
}
