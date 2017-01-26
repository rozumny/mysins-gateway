import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateLoader, TranslateModule } from 'ng2-translate/ng2-translate';
import { APP_TRANSLATIONS } from '../app/translations';
import { Observable } from 'rxjs/Observable';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { Navbar } from '../components/navbar/navbar';
import { NewForms } from '../components/forms/newForms';
import { FormButton } from '../components/forms/controls/formbutton/formbutton';
import { Checkbox } from '../components/forms/controls/checkbox/checkbox';
import { LocalizedText } from '../components/forms/controls/localizedtext/localizedtext';
import { Text } from '../components/forms/controls/text/text';
import { Color } from '../components/forms/controls/color/color';
import { Number } from '../components/forms/controls/number/number';
import { Password } from '../components/forms/controls/password/password';
import { RadioControl } from '../components/forms/controls/radio/radio';
import { MultiSelectControl } from '../components/forms/controls/multiselectcontrol/multiselectcontrol';

import { Navigation } from '../services/navigation';
import { NavigationActual } from '../services/navigationActual';
import { FormService } from '../services/formService';
import { FormsService } from '../services/formsService';
import { UtilsService } from '../services/utilsService';
import { SigninService } from '../services/signinService';
import { LocalStorageService } from '../services/localStorage';

import { nav } from '../reducers/navigation';

export class SlTranslationLoader implements TranslateLoader {

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
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,

    Navbar,
    NewForms,
    Text,
    FormButton,
    Checkbox,
    LocalizedText,
    MultiSelectControl,
    RadioControl,
    Number,
    Color,
    Password
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({ provide: TranslateLoader, useClass: SlTranslationLoader }),
    StoreModule.provideStore({ nav }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,

    Navbar,
    NewForms,
    Text,
    FormButton,
    Checkbox,
    LocalizedText,
    MultiSelectControl,
    RadioControl,
    Number,
    Color,
    Password
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    Navigation,
    NavigationActual,
    FormService,
    FormsService,
    UtilsService,
    SigninService,
    LocalStorageService]
})
export class AppModule { }
