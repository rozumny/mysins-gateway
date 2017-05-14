import { Component, Renderer } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalStorageService } from '../../services/localStorage';
import { TranslateService } from 'ng2-translate';
import { Charity } from '../../models/charity';
import { FileService } from '../../services/fileService';
import { GatewayService } from '../../services/gatewayService';
import { ModalService } from '../../services/modalService';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  public language: string;
  public charity: Charity;
  public paymentAccepted: boolean = false;
  public paymentError: string;
  private hostedFieldsInstance: any;

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
    this.localStorageService.get('lang').then(lang => {
      this.language = lang;
    });
    // this.modalService.showWait(Promise.all([
    //   }),
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
    this.modalService.showWait(p);
  }

  submit() {
    if (this.hostedFieldsInstance._state.fields.cvv.isValid &&
      this.hostedFieldsInstance._state.fields.expirationDate.isValid &&
      this.hostedFieldsInstance._state.fields.number.isValid
    ) {

      var p = new Promise<void>((resolve, reject) => {
        this.hostedFieldsInstance.tokenize((tokenizeErr, payload) => {
          if (tokenizeErr) {
            return;
          }

          this.gatewayService.checkout(payload.nonce).then((response) => {
            if (response == 'ok') {
              this.paymentAccepted = true;
              this.paymentError = "";
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
    alert("close window");
  }
}
