import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateLoader, TranslateModule } from 'ng2-translate/ng2-translate';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

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

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,

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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,


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
    UtilsService]
})
export class AppModule { }
