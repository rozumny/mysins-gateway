import { Injectable } from '@angular/core';
import { Charity, CharityCategory } from '../models/charity';
import { Utils } from '../services/utilsService';
import { FileService } from '../services/fileService';

@Injectable()
export class CharityService {

    constructor(
        private fileService: FileService
    ) {
    }

    getCharityById(id: string): Promise<Charity> {
        return this.fileService.get("charities." + id);
    }

    getCharitiesByType(categoryType: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.getCharities().then(data => {
                var chars = Utils.objectToArrayStoreKeys(data).filter(x => {
                    return x.type == categoryType;
                });
                resolve(chars);
            });
        });
    }

    getCharities(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.fileService.get("charities").then(data => {
                //don't show finished charities
                for (var name in data) {
                    if (data.hasOwnProperty(name)) {
                        if (data[name].progress >= 100)
                            delete data[name];
                    }
                }
                resolve(data);
            });
        });
    }

    getCategories(): Promise<CharityCategory[]> {
        return this.fileService.get("categories");
    }
}
