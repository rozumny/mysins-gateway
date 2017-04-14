import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { SinsService } from '../../services/sinsService';
import { MemoryStorageService } from '../../services/memoryStorage';
import { SinsListPage } from '../../pages/sins-list/sins-list';
import { AboutPage } from '../../pages/about/about';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  animations: [trigger('fade', [
    state('visible', style({
      opacity: 1
    })),
    state('invisible', style({
      opacity: 0
    })),
    transition('invisible <=> visible', animate('1500ms ease-in'))
  ])]
})
export class HomePage {
  public fadeState: String = 'visible';
  public total: number = 1222;
  private interval: any;

  constructor(
    private navigation: NavController,
    private memoryStorageService: MemoryStorageService,
    private sinsService: SinsService
  ) {
  }

  ionViewDidEnter() {
    this.memoryStorageService.set('basket', []);
    this.fadeState = 'invisible';
    setTimeout(() => {
      this.fadeState = 'visible';
    }, 1500);

    this.interval = setInterval(() => {
      this.fadeState = 'invisible';
      setTimeout(() => {
        this.fadeState = 'visible';
      }, 1500);
    }, 3000);
  }

  ionViewDidLeave() {
    clearInterval(this.interval);
  }

  openList() {
    this.navigation.push(SinsListPage);
  }

  openAbout() {
    this.navigation.push(AboutPage);
  }
}
