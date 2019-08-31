import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from "./components/account/account.component";

const routes: Routes = [
  { path: "", redirectTo: "accounts", pathMatch: "full" },
  { path: "accounts", component: AccountListComponent },
  { path: "account/:id", component: AccountComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs', 
      level: NgxLoggerLevel.DEBUG, 
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
