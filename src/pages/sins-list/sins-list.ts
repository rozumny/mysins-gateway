import { Component, ViewChild } from '@angular/core';
import { SinsService } from '../../services/sinsService';
import { Utils } from '../../services/utilsService';
import { Sin, Question } from '../../models/sin';
import { Slides, NavController, Content } from 'ionic-angular';

@Component({
  selector: 'sins-list',
  templateUrl: 'sins-list.html'
})
export class SinsListPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;

  private slideIndex: number = 0;
  public sins: Sin[];
  public sin: Sin;
  public questions: Question[]

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

  selectSin() {
    this.sin = this.sins[this.slideIndex];
    this.questions = Utils.objectToArrayStoreKeys(this.sin.questions);
    this.content.resize();
  }

  getSlidesHeight() {
    return this.sin ? '30%' : '60%';
  }

  slideChanged() {
    var index = this.slides.getActiveIndex();
    if (index <= this.sins.length - 1) {
      this.slideIndex = index;

      if (this.sin) {
        this.sin = this.sins[this.slideIndex];
        this.questions = Utils.objectToArrayStoreKeys(this.sin.questions);
      }
    }
  }
}
