import { Component, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';
import { Events } from 'ionic-angular';

@Component({
    selector: 'password',
    templateUrl: 'password.html'
})
export class Password {
    @Input() control: Control;
    @Input() form: Form;
    public show: boolean = true;

    constructor(
        private translate: TranslateService,
        private events: Events
    ) {
    }

    ngOnInit() {
        if (this.control.config.hide)
            this.show = false;

        if (this.control.config.onshow) {
            this.events.subscribe(this.control.config.onshow, () => {
                this.show = true;
            });
        }
        if (this.control.config.onhide) {
            this.events.subscribe(this.control.config.onhide, () => {
                this.show = false;
            });
        }
    }
}
