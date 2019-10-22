import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionTypes: string[];
  transaction: Transaction;

  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.loadTransactionTypes();
    this.transaction = new Transaction();
  }

  private loadTransactionTypes() {
    this.transactionService.getTransactionTypes()
      .subscribe((transactionTypes: string[]) => {
        this.transactionTypes = transactionTypes;
      });
  }

  save() {
    var transactionTo = this.createTransactionTo();
    this.transactionService.saveTransaction(transactionTo)
      .subscribe((transaction: Transaction) => {
        this.router.navigateByUrl("/transactions");
      });
  }

  private createTransactionTo(): object {
    return {
      id: this.transaction.id,
      dateCreated: this.transaction.dateCreated,
      transactionType: this.transaction.transactionType,
      sourceAllocationCenterId: this.transaction.sourceAllocationCenter 
        ? this.transaction.sourceAllocationCenter.id 
        : null,
      destinationAllocationCenterId: this.transaction.destinationAllocationCenter 
        ? this.transaction.destinationAllocationCenter.id 
        : null,
      amount: this.transaction.amount,
      dateBankProcessed: this.transaction.dateBankProcessed,
      creditAccount: this.transaction.creditAccount 
        ? this.transaction.creditAccount.id 
        : null
    };
  }
}
