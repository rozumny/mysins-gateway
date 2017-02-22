import { Component, Input } from '@angular/core';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';
import { FormService } from '../../../../services/formService';
import { Utils } from '../../../../services/utilsService';
import { Events } from 'ionic-angular';

@Component({
    selector: 'radio',
    templateUrl: 'radio.html'
})
export class RadioControl {
    @Input() control: Control;
    @Input() form: Form;
    options: any[];

    constructor(
        private formService: FormService,
        private utilsService: Utils,
        private events: Events
    ) {
    }

    ngOnInit() {
        if (this.control.config.populate) {
            this.options = this.formService.getFormSymbols()[this.control.config.populate]();
        }
        else if (this.control.config.populateFromData) {
            var options = this.utilsService.resolve(this.control.config.populateFromData, this.form.data);
            this.options = options.map(x => {
                return { label: x, value: x };
            });
        } else if (this.control.config.populateByPromise) {
            this.formService.getFormSymbols()[this.control.config.populateByPromise]().then(data => {
                this.options = data;
            });
        }
    }

    onChange(value) {
        var change = {};
        change[this.control.dataField] = this.control.dataObject[this.control.dataField];
        this.form.formSavedEmmitter.emit(change);
        if (this.control.config.onchange) {
            this.events.publish(this.control.config.onchange, value);
        }
    }
}
