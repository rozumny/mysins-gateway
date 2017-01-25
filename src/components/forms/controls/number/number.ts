import { Component, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';
import { Events } from 'ionic-angular';

@Component({
    selector: 'number',
    templateUrl: 'number.html'
})
export class Number {
    @Input() control: Control;
    @Input() form: Form;

    constructor(
        private events: Events,
        private translate: TranslateService
    ) {
    }

    focusOutFunction() {
        if (this.control.config.focusout)
            this.events.publish(this.control.config.focusout, this.control.dataObject[this.control.dataField]);
    }
}
