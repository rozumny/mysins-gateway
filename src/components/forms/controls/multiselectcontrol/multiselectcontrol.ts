import { Component, Input } from '@angular/core';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';
import { FormService } from '../../../../services/form-service';
import { ConfigService } from '../../../../services/config-service';
import { Utils } from '../../../../services/utils-service';
import { Events } from 'ionic-angular';

@Component({
    selector: 'multiselectcontrol',
    templateUrl: 'multiselectcontrol.html'
})
export class MultiSelectControl {
    @Input() control: Control;
    @Input() form: Form;
    @Input() isMultiple: boolean = false;
    options: any[];

    constructor(
        private formService: FormService,
        private configService: ConfigService,
        private utilsService: Utils,
        private events: Events
    ) {
    }

    ngOnInit() {
        if (this.control.config.populate) {
            this.options = this.formService.getFormSymbols()[this.control.config.populate]();
        }
        // else if (this.control.config.optionsFile) {
        //     this.options = this.configService.getConfig('businessviews').items;
        // } 
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
        if (this.control.config.onchange) {
            this.events.publish(this.control.config.onchange, value);
        }
    }
}
