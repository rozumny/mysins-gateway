import { Injectable } from '@angular/core';
import { ConfigService } from './config-service';
import { Utils } from './utils-service';

@Injectable()
export class FormService {
    constructor(
        private configService: ConfigService,
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
            },
            getMainWindowStartPosition: () => {
                return [{ value: 'middle', label: 'Middle' }, { value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }];
            }
        };
    };
}
