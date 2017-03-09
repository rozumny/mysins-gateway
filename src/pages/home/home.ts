import { Component } from '@angular/core';
import { SinsService } from '../../services/sinsService';
// import { Utils } from '../../services/utilsService';
// import { Sin } from '../../models/sin';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  public total: number = 1222;

  constructor(
    private sinsService: SinsService
  ) {

  }
}
