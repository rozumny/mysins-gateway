import { Component, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';
import { Events } from 'ionic-angular';

@Component({
    selector: 'formbutton',
    templateUrl: 'formbutton.html'
})
export class FormButton {
    @Input() control: Control;
    @Input() form: Form;

    constructor(
        private translate: TranslateService,
        private events: Events
    ) {
    }

    onClick(e) {
        this.events.publish(this.control.config.onClick);
        e.preventDefault();
    }
}
