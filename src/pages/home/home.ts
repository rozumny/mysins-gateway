import { Component, Renderer } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalStorageService } from '../../services/localStorage';
import { TranslateService } from 'ng2-translate';
import { Charity } from '../../models/charity';
import { Transaction } from '../../models/transaction';
import { FileService } from '../../services/fileService';
import { GatewayService } from '../../services/gatewayService';
import { ModalService } from '../../services/modalService';
import { sprintf } from "sprintf-js";

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  public language: string;
  public charity: Charity;
  public transaction: Transaction;
  public paymentAccepted: boolean = false;
  public paymentError: string;
  private hostedFieldsInstance: any;
  private transactionId: string;
  public message: string;

  constructor(
    private navigation: NavController,
    private localStorageService: LocalStorageService,
    private renderer: Renderer,
    private gatewayService: GatewayService,
    private modalService: ModalService,
    private fileService: FileService,
    private translate: TranslateService,
    public navParams: NavParams
  ) {
    var splitted = window.location.search.slice(1).split('=')
    this.transactionId = splitted[1];
  }

  ngAfterViewInit() {
    var __this = this;
    var p = new Promise<void>((resolve, reject) => {
      var form = document.querySelector('#cardForm');

      this.gatewayService.getToken().then(token => {
        var authorization = token;

        (<any>window).braintree.client.create({
          authorization: authorization
        }, (err, clientInstance) => {
          if (err) {
            console.error(err);
            return;
          }
          createHostedFields(clientInstance);
        });

        function createHostedFields(clientInstance) {
          (<any>window).braintree.hostedFields.create({
            client: clientInstance,
            styles: {
              'input': {
                'font-size': '16px',
                'font-family': 'courier, monospace',
                'font-weight': 'lighter',
                'color': '#ccc'
              },
              ':focus': {
                'color': 'black'
              },
              '.valid': {
                'color': '#8bdda8'
              }
            },
            fields: {
              number: {
                selector: '#card-number',
                placeholder: '4111 1111 1111 1111'
              },
              cvv: {
                selector: '#cvv',
                placeholder: '123'
              },
              expirationDate: {
                selector: '#expiration-date',
                placeholder: 'MM/YYYY'
              }
            }
          }, (err, hostedFieldsInstance) => {
            __this.hostedFieldsInstance = hostedFieldsInstance;
            resolve();
          });
        }
      });
    });
    this.modalService.showWait(Promise.all([
      p,
      new Promise<void>((resolve, reject) => {
        this.localStorageService.get('lang').then(lang => {
          this.fileService.get("transactions." + this.transactionId).then(transaction => {
            this.transaction = transaction;

            if (!this.transaction || this.transaction.finished) {
              this.paymentAccepted = true;
              resolve();
            } else {
              this.fileService.get("charities." + transaction.charityId).then(charity => {
                this.charity = charity;
                this.language = lang;
                this.message = sprintf(this.translate.instant("home_description"), transaction.total, charity.title[lang]);
                resolve();
              });
            }
          })
        })
      })
    ]));
  }

  submit() {
    if (this.hostedFieldsInstance._state.fields.cvv.isValid &&
      this.hostedFieldsInstance._state.fields.expirationDate.isValid &&
      this.hostedFieldsInstance._state.fields.number.isValid &&
      this.transaction
    ) {

      var p = new Promise<void>((resolve, reject) => {
        this.hostedFieldsInstance.tokenize((tokenizeErr, payload) => {
          if (tokenizeErr) {
            return;
          }

          this.gatewayService.checkout(payload.nonce, this.transaction.total).then((response) => {
            if (response == 'ok') {
              this.paymentAccepted = true;
              this.paymentError = "";

              //close transaction
              var x = (this.charity.total * this.charity.progress) / 100;
              var y = (100 * (x + this.transaction.total)) / this.charity.total;
              this.fileService.set("charities." + this.charity.key + ".progress", Math.round(y)).then(() => {
                this.fileService.set("transactions." + this.transactionId + ".finished", true).then(() => {
                  resolve();
                });
              });

            } else {
              this.paymentError = response;
            }
            resolve();
          });
        });
      });

      this.modalService.showWait(p);
    }
  }

  closeWindow() {
    window.close();
  }
}
