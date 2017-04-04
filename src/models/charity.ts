export class Charity {
    public key: string;
    public type: number;
    public total: number;
    public progress: number;
    public title: { [id: string]: string };
    public description: { [id: string]: string };
    public detail: { [id: string]: string };
    constructor() {
    }
}

export class CharityCategory {
    public key: string;
    public title: { [id: string]: string };
    constructor() {
    }
}