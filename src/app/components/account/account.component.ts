import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from "@angular/router";
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountTypes: string[];
  account: Account;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.loadAccountTypes();
    this.loadAccount();
  }

  private loadAccountTypes() {
    this.accountService.getAccountTypes().subscribe((accountTypes) => {
      this.accountTypes = accountTypes;
    })
  }

  private loadAccount() {
    var accountIdInPath = this.activatedRoute.snapshot.paramMap.get("id");
    var accountId: number = parseInt(accountIdInPath);
    if (accountId >= 0) {
      this.accountService.getAccount(accountId)
        .subscribe((account: Account) => {
          this.account = account;
        });
    }
    else {
      this.account = new Account();
    }
  }

  save() {
    this.accountService.saveAccount(this.account)
      .subscribe((account: Account) => {
        var listUrl = environment.base_url + "accounts";
        this.router.navigateByUrl(listUrl);
      });
  }

}
