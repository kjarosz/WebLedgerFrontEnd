import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService,
  ) { }

  ngOnInit() {
    this.transaction = new Transaction();
    this.loadTransactionTypes();
    this.loadTransaction();
  }

  private loadTransactionTypes() {
    this.transactionService.getTransactionTypes()
      .subscribe((transactionTypes: string[]) => {
        this.transactionTypes = transactionTypes;
      });
  }

  private loadTransaction() {
    var idInPath = this.activatedRoute.snapshot.paramMap.get("id");
    var id: number = parseInt(idInPath);
    if (id >= 0) {
      this.transactionService.getTransaction(id)
        .subscribe((transaction: Transaction) => {
          this.transaction = transaction;
        });
    } else {
      this.transaction = new Transaction();
    }
  }

  save() {
    var transactionTo = this.createTransactionTo();
    this.transactionService.saveTransaction(transactionTo)
      .subscribe((transaction: Transaction) => {
        this.router.navigateByUrl("/transactions");
      });
  }

  isSpendingType(): boolean {
    return this.transaction.transactionType == "Spend"
        || this.transaction.transactionType == "Credit"
        || this.transaction.transactionType == "Transfer";
  }

  isAddingType(): boolean {
    return this.transaction.transactionType == "Add"
        || this.transaction.transactionType == "Pay"
        || this.transaction.transactionType == "Transfer";
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
