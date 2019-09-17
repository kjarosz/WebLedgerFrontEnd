import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionTypes: string[];
  transaction: Transaction;

  constructor() { }

  ngOnInit() {
    this.transactionTypes = [ "Add", "Spend" ];
    this.transaction = new Transaction();
  }

}
