import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { Account } from '../../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private logger: NGXLogger,
    private http: HttpClient
  ) { }

  getAccountTypes(): Observable<string[]> {
    var accountsListUrl = environment.base_url + "accounts/types";
    this.logger.debug("Fetch account types from: {}", accountsListUrl);
    var observable = this.http.get<string[]>(accountsListUrl)
    observable.subscribe((accountTypes) => {
      this.logger.debug("Account types fetched:", accountTypes);
    });
    return observable;
  }

  getAccounts(): Observable<Account[]> {
    var accountsListUrl = environment.base_url + "accounts";
    this.logger.debug("Fetch accounts from: {}", accountsListUrl);
    var observable = this.http.get<Account[]>(accountsListUrl)
    observable.subscribe((accounts) => {
      this.logger.debug("Accounts fetched:", accounts);
    });
    return observable;
  }

  getAccount(id: Number): Observable<Account> {
    var accountsGetUrl = environment.base_url + "accounts/" + id;
    var observable = this.http.get<Account>(accountsGetUrl);
    observable.subscribe((account) => {
      this.logger.debug("Account fetched:", account);
    });
    return observable;
  }
       
  saveAccount(account: Account): Observable<Account> {
    var accountSaveUrl = environment.base_url + "accounts/save";
    var observable = this.http.post<Account>(accountSaveUrl, account)
    return observable;
  }
}
