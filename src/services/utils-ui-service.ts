import { Injectable } from '@angular/core';
import { Alert, AlertController, LoadingController, ToastController, Toast } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { Utils } from './utils-service';

@Injectable()
export class UtilsUI {

    constructor(
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private translate: TranslateService
    ) {
    }

    public pleaseWait(promise: Promise<any>, onDidDismiss?: () => void): Promise<PleaseWaitResult> {
        Utils.logTime('loading');
        const loading = this.loadingCtrl.create({
            // content: this.translate.instant('_please_wait'),
            // duration: 6000, // program should always ensure promise is resolved or rejected; but it not close loading after given duration
            dismissOnPageChange: false
        });
        loading.present();
        loading.onDidDismiss(onDidDismiss);
        return promise
            .then((data) => {
                Utils.logTimeEnd('loading');
                return loading.dismiss().then(() => {
                    console.debug('pleaseWait was dismiss-ed with ok', data);
                    return new PleaseWaitResult(true, data);
                });
            })
            .catch(error => {
                Utils.logDebug('pleaseWait promise retured error', error);
                Utils.logTimeEnd('loading');
                return loading.dismiss().then(() => {
                    console.debug('pleaseWait was dismiss-ed with err', error);
                    return new PleaseWaitResult(false, error);
                });
            });
    }

    // Reports uiMsg on UI provided uiMsg is not empty, 
    // otherwise does nothing (used for swallowed errors, like ApiErrorExpiredToken)
    public reportError(uiMsg: string): void {
        if (uiMsg) { 
            this.createToast(uiMsg).present();
        }
    }

    public createToast(translationKey: string, interpolateParams?: Object): Toast {
        return this.toastCtrl.create({
            message: this.translate.instant(translationKey, interpolateParams),
            duration: 3000
        });
    }

    public createAlert(header: string, body: string, buttons: any, inputs?: any): Alert {
        const alertPrompt = {
            title: header,
            message: body,
            buttons: buttons
        };
        if (inputs) {
            alertPrompt['inputs'] = inputs;
        }
        return this.alertCtrl.create(alertPrompt);
    }
}

export class PleaseWaitResult {
    constructor(public success: boolean, public payload: any) { }
}
