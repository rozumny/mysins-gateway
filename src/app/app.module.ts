import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateLoader, TranslateModule } from 'ng2-translate/ng2-translate';
import { APP_TRANSLATIONS } from '../app/translations';
import { Observable } from 'rxjs/Observable';

import { HomePage } from '../pages/home/home';
import { Utils } from '../services/utilsService';
import { FileService } from '../services/fileService';
import { GatewayService } from '../services/gatewayService';
import { LocalStorageService } from '../services/localStorage';
import { MemoryStorageService } from '../services/memoryStorage';
import { ModalService } from '../services/modalService';
import { SinsService } from '../services/sinsService';
import { CharityService } from '../services/charityService';

export class mySinsTranslationLoader implements TranslateLoader {

  public getTranslation(lang: string): Observable<any> {
    let result = {};
    Object.keys(APP_TRANSLATIONS).forEach(function (key) {
      result[key] = APP_TRANSLATIONS[key][lang];
    });
    console.debug('Translations loaded for "' + lang + '"');
    return Observable.of(result);
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back-outline'
    }),
    TranslateModule.forRoot({ provide: TranslateLoader, useClass: mySinsTranslationLoader })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Utils,
    ModalService,
    FileService,
    SinsService,
    GatewayService,
    CharityService,
    LocalStorageService,
    MemoryStorageService
  ]
})
export class AppModule { }
