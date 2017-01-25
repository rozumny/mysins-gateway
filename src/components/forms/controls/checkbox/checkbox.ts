import { Component, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';
import { Events } from 'ionic-angular';

@Component({
    selector: 'checkbox',
    templateUrl: 'checkbox.html'
})
export class Checkbox {
    @Input() control: Control;
    @Input() form: Form;
    data: boolean;
    public hide: boolean;

    constructor(
        private events: Events,
        private translate: TranslateService
    ) {
    }

    ngOnDestroy() {
        this.events.unsubscribe(this.control.config.onhide, null);
    }

    ngOnInit() {
        if (this.control.config.onhide) {
            this.events.subscribe(this.control.config.onhide, (e) => {
                this.hide = e[0];
            });
        }
        // this.data = this.utilsService.resolve(this.form.data, this.control.config.name);
    }
}
