import { Component, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Control } from '../../../../models/control';
import { Form } from '../../../../models/form';

@Component({
    selector: 'color',
    templateUrl: 'color.html'
})
export class Color {
    @Input() control: Control;
    @Input() form: Form;

    constructor(private translate: TranslateService) {
    }
}
