import { Injectable } from '@angular/core';

@Injectable()
export class MemoryStorageService {
    store: any = {};

    constructor() {
    }

    get(key: string): any {
        return this.store[key];
    }

    set(key: string, data: any) {
        this.store[key] = data;
    }
}

