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

  getAccounts(): Observable<Account[]> {
    var accountsListUrl = environment.base_url + "accounts";
    this.logger.debug("Fetch accounts from: {}", accountsListUrl);
    var observable = this.http.get<Account[]>(accountsListUrl)
    observable.subscribe((accounts) => {
      this.logger.debug("Accounts fetched:", accounts);
    });
    return observable;
  }
       
}
