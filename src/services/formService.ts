import { Injectable } from '@angular/core';
import { UtilsService } from './utilsService';

@Injectable()
export class FormService {
    constructor(
        private utilsService: UtilsService
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
