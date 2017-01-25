import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';

@Component({
    selector: 'localizedtext',
    templateUrl: 'localizedtext.html'
})
export class LocalizedText {
    @Input() control: Control;
    @Input() form: Form;
    hide: boolean;

    constructor(private events: Events) {
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
    }
}
