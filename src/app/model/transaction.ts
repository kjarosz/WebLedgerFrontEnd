import { AllocationCenter } from './allocation-center';
import { Account } from './account';

export class Transaction {
    public id: number;
    public dateCreated: Date;
    public transactionType: string;
    public sourceAllocationCenter: AllocationCenter;
    public destinationAllocationCenter: AllocationCenter;
    public amount: number;
    public dateBankProcessed: Date;
    public creditAccount: Account;

    constructor() {
        this.id = null;
        this.dateCreated = new Date();
        this.transactionType = "Add";
        this.sourceAllocationCenter = null;
        this.destinationAllocationCenter = null;
        this.amount = 0.0;
        this.dateBankProcessed = null;
        this.creditAccount = null;
    }
}