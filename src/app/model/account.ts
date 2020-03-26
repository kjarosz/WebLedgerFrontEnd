export class Account {
    public id: number;
    public name: string;
    public type: string;
    public amount: Number;
    public limit: number;

    constructor() { 
        this.name = "";
        this.type = "";
        this.amount = 0.0;
        this.limit = 0.0;
    }
}