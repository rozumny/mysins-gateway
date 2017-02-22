import { UserSin } from './userSin';

export class User {
    public username: string;
    public password: string;
    public email: string;
    public token: string;
    public public: boolean = false;
    public sins: Map<string, UserSin>
    constructor() {
    }
}
