import { Component, OnInit } from '@angular/core';

import { Account } from '../../model/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor() { }

  ngOnInit() {
    var account = new Account();
    account.name = "sample name";
    this.accounts = [];
    this.accounts.push(account);
  }

}
