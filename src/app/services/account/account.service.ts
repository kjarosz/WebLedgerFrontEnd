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
    return this.http.get<string[]>(accountsListUrl)
  }

  getAccounts(): Observable<Account[]> {
    var accountsListUrl = environment.base_url + "accounts";
    return this.http.get<Account[]>(accountsListUrl)
  }

  getAccount(id: Number): Observable<Account> {
    var accountsGetUrl = environment.base_url + "accounts/" + id;
    return this.http.get<Account>(accountsGetUrl);
  }
       
  saveAccount(account: Account): Observable<Account> {
    var accountSaveUrl = environment.base_url + "accounts/save";
    return this.http.post<Account>(accountSaveUrl, account)
  }
}
