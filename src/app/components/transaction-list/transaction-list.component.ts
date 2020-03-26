import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../../model/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.loadTransactions();
  }

  private loadTransactions() {
    this.transactionService.getTransactions()
      .subscribe((transactions: Transaction[]) => {
        this.transactions = transactions;
      });
  }
}
