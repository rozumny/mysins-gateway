import { Component, ViewChild } from '@angular/core';
import { SinsService } from '../../services/sinsService';
import { Utils } from '../../services/utilsService';
import { Sin, Question, Answer } from '../../models/sin';
import { Slides, NavController, Content } from 'ionic-angular';
import { SinAbsolutionPage } from '../../pages/sin-absolution/sin-absolution';


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
  public questions: Question[];
  public questionIndex: number = 0;
  public answers: Answer[] = [];

  constructor(
    private sinsService: SinsService,
    private navigation: NavController,
    public utils: Utils
  ) {
    this.sinsService.getAll().then(sins => {
      this.sins = Utils.objectToArrayStoreKeys(sins);
    });
  }

  nextQuestion(answer: Answer) {
    answer.type = this.questions[this.questionIndex].type;
    if (this.answers.length == 0 || !this.answers.find(x => {
      return x.title.indexOf(this.questions[this.questionIndex].title) > -1;
    }))
      this.answers.push(answer);
    else
      this.answers[this.answers.length - 1] = answer;

    if (this.sin.key != "5" || (answer.title == 'sins_type_5_question_0_answer_6' || answer.title == 'sins_type_5_question_0_answer_7')) {
      if (this.questionIndex < this.questions.length - 1) {
        this.questionIndex++;
      } else {
        this.navigate();
      }
    } else {
      this.navigate();
    }
  }

  navigate() {
    this.navigation.push(SinAbsolutionPage, {
      total: this.calculateResult(this.answers),
      answers: this.answers,
      sin: this.sins[this.slideIndex]
    });
  }

  calculateResult(answers) {
    var base = answers.find(x => x.type == 'base').value;

    var multis = answers.filter(x => x.type == 'multi');
    multis.map(x => {
      base *= x.value;
    });

    return Math.round(base);
  }

  getClass(sin: Sin, index: number) {
    return parseInt(sin.key) == index;
  }

  getHideClass() {
    return !!this.sin;
  }

  selectSin() {
    this.sin = this.sins[this.slideIndex];
    this.questions = Utils.objectToArrayStoreKeys(this.sin.questions);
    this.content.resize();
  }

  getSlidesHeight() {
    return this.sin ? '40%' : '65%';
  }

  slideChanged() {
    var index = this.slides.getActiveIndex();
    if (index <= this.sins.length - 1) {
      this.slideIndex = index;
      this.answers = [];
      this.questionIndex = 0;

      if (this.sin) {
        this.sin = this.sins[this.slideIndex];
        this.questions = Utils.objectToArrayStoreKeys(this.sin.questions);
      }
    }
  }

  objectToArrayStoreKeys(object: any) {
    return Utils.objectToArrayStoreKeys(object);
  }
}
