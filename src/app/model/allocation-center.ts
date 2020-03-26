import { Account } from './account';

export class AllocationCenter {
    public id: number;
    public name: string;
    public amount: number;
    public goal: number;
    public account: Account;
    public paidFrom: Account;

    constructor() {
        this.id = null;
        this.name = "";
        this.amount = 0;
        this.goal = 0;
        this.account = null;
        this.paidFrom = null;
    }
}