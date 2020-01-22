import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getTransactionTypes(): Observable<string[]> {
    var listUrl = environment.base_url + "transactions/types";
    return this.http.get<string[]>(listUrl)
  }

  getTransactions(): Observable<Transaction[]> {
    var listUrl = environment.base_url + "transactions";
    return this.http.get<Transaction[]>(listUrl);
  }

  getTransaction(id: number): Observable<Transaction> {
    var transactionUrl = environment.base_url + "transactions/" + id;
    return this.http.get<Transaction>(transactionUrl);
  }

  saveTransaction(transaction: object): Observable<Transaction> {
    var saveUrl = environment.base_url + "transactions/save";
    return this.http.post<Transaction>(saveUrl, transaction);
  }

  deleteTransaction(id: number): Observable<String> {
    var deleteUrl = environment.base_url + "transactions/" + id;
    return this.http.delete<String>(deleteUrl);
  }
}
