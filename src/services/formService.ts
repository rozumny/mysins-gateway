import { Injectable } from '@angular/core';
import { Utils } from './utilsService';

@Injectable()
export class FormService {
    constructor(
        private utilsService: Utils
    ) {
    }

    getFormDependencies() {
        return {
            symbols: this.getFormSymbols()
        };
    };

    getFormSymbols() {
        return {
            getLanguages: () => {
                return [{ value: 'en', label: 'English' }, { value: 'de', label: 'Deutsch' }];
            }
        };
    };
}
