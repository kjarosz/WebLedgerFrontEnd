import { Component, OnInit } from '@angular/core';
import { AllocationCenter } from '../../model/allocation-center';
import { Account } from '../../model/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-allocation-center',
  templateUrl: './allocation-center.component.html',
  styleUrls: ['./allocation-center.component.css']
})
export class AllocationCenterComponent implements OnInit {

  allocationCenter: AllocationCenter;
  accounts: Account[];

  selectorShowing: boolean;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.allocationCenter = new AllocationCenter();
  }

  showAccountSelector() {
    this.loadAccountList();
    this.selectorShowing = true;
  }

  private loadAccountList() {
    this.accountService.getAccounts().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
    })
  }

  hideAccountSelector() {
    this.selectorShowing = false;
  }

  selectAccount(account: Account) {
    this.allocationCenter.account = account;
    this.hideAccountSelector();
  }
}
