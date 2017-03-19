export class Sin {
    public key: string;
    public title: string;
    public questions: { [id: string]: Question };
    constructor() {
    }
}

export class Question {
    public title: string;
    public type: string;
    public answers: { [id: string]: Answer };
}

export class Answer {
    public title: string;
    public value: string;
}
