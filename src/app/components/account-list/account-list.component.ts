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

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

}
