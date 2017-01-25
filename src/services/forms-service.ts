import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/debounce';
import { Form } from '../models/form';
import { Control } from '../models/control';
import { FormDefinition } from '../models/form-definition';
import { ConfigService } from './config-service';
import { FormService } from './form-service';
import { Utils } from './utils-service';

@Injectable()
export class FormsService {

    constructor(
        private http: Http,
        private formService: FormService,
        private configService: ConfigService,
        private formBuilder: FormBuilder,
        private utilsService: Utils
    ) {
    }

    public getNewFormModel(formDef: FormDefinition, watchForm: boolean, data: any = {}): Promise<Form> {
        return new Promise<Form>((resolve, reject) => {
            const form = new Form();
            form.watchForm = watchForm;
            form.config = formDef;
            var fields = {};

            formDef.fields.forEach(field => {
                var validators = [];

                if (field.required === 'true')
                    validators.push(Validators.required);

                fields[field.name + (field.lang ? field.lang : '')] = ['', Validators.compose(validators)];
            });

            form.authForm = this.formBuilder.group(fields);

            formDef.fields.forEach(field => {
                var control = new Control();
                control.abstractControl = form.authForm.controls[field.name + (field.lang ? field.lang : '')];
                control.config = field;
                form.controls.push(control);
            });

            // form.configKey = 'TODOconfigKey';
            form.watchForm = watchForm;

            this.loadNewFormData(form, data).then(() => {
                setTimeout(() => { // first render controls with new data
                    form.authForm.valueChanges
                        .debounce(function (x) {
                            return Observable.timer(500);
                        })
                        .subscribe((value: string) => {
                            if (form.authForm.valid && watchForm) {
                                form.formSavedEmmitter.emit(form.data);
                            }
                        });
                }, 1000);
                resolve(form);
            });
        });
    }

    private loadNewFormData(form: Form, data: any): Promise<Form> {
        return new Promise<Form>((resolve, reject) => {
            if (data === undefined || data === null)
                data = {};
            form.data = data;

            form.controls.forEach((control: Control) => {
                this.setControlData(control, form);
            });
            resolve(form);
        });
    }

    private setControlData(control: Control, form: Form) {
        if (this.utilsService.resolve(control.config.name, form.data) === undefined || this.utilsService.resolve(control.config.name, form.data) === null) {
            this.utilsService.setNested(form.data, control.config.name, this.utilsService.getEmptyObject(control.config));
        }

        var pathArray = control.config.name.split('.');
        pathArray.splice(pathArray.length - 1, 1);
        var path = pathArray.join('.');
        control.dataObject = this.utilsService.resolve(path, form.data);
        control.dataField = this.utilsService.getFieldName(control.config.name);
    }
}
