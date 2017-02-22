export class Sin {
    public title: string;
    public question: { [id: string]: Question };
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
