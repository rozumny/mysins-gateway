export class Transaction {
    public key: string;
    public userId: string;
    public charityId: string;
    public total: number;
    public sinIds: string[] = [];
    public finished: boolean = false;
    public date: Date = new Date();

    constructor() {
    }
}