import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'account-reference',
  templateUrl: './account-reference.component.html',
  styleUrls: ['./account-reference.component.css']
})
export class AccountReferenceComponent implements OnInit {

  @Input() public label: string;
  @Input() public name: string;

  private accountReference: Account;

  @Input()
  get account(): Account {
    return this.accountReference;
  }

  @Output() public accountChange = new EventEmitter();

  set account(account: Account) {
    this.accountReference = account;
    this.accountChange.emit(account);
  }

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  public accounts: Account[];
  public selectingAccount: boolean;

  showAccountSelectDialog() {
    this.accountService.getAccounts().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
      this.selectingAccount = true;
    });
  }

  selectAccount(account: Account) {
    this.account = account;
    this.closeSelector();
  }

  closeSelector() {
    this.selectingAccount = false;
  }

}
