import { Component, OnInit } from '@angular/core';

import { Account } from '../../model/account';
import { AccountService } from "../../services/account/account.service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    var account = new Account();
    account.id = 1;
    account.name = "sample name";
    account.type = "Checking";
    account.amount = 5.0;
    account.limit = 10.0;
    this.accounts = [];
    this.accounts.push(account);
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

}
