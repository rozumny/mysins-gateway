import { Component } from '@angular/core';
import { SinsService } from '../../services/sinsService';
import { Utils } from '../../services/utilsService';
import { Sin } from '../../models/sin';

@Component({
  selector: 'sins-list',
  templateUrl: 'sins-list.html'
})
export class SinsListPage {

  public sins: any[];

  constructor(
    private sinsService: SinsService
  ) {
    this.sinsService.getAll().then(sins => {
      this.sins = Utils.objectToArrayStoreKeys(sins);
    });
  }

  getClass(sin: Sin, index: number) {
    return parseInt(sin.key) == index;
  }
}
