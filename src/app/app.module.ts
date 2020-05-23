import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from "./components/account/account.component";
import { AllocationCenterListComponent } from './components/allocation-center-list/allocation-center-list.component';
import { AllocationCenterComponent } from './components/allocation-center/allocation-center.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { AccountReferenceComponent } from './components/account-reference/account-reference.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AllocationCenterReferenceComponent } from './components/allocation-center-reference/allocation-center-reference.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "transactions", pathMatch: "full" },
  { path: "accounts", component: AccountListComponent },
  { path: "accounts/:id", component: AccountComponent },
  { path: "allocationcenters", component: AllocationCenterListComponent },
  { path: "allocationcenters/:id", component: AllocationCenterComponent },
  { path: "transactions", component: TransactionListComponent },
  { path: "transactions/:id", component: TransactionComponent },
  { path: "login", component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountComponent,
    AllocationCenterListComponent,
    AllocationCenterComponent,
    TextFieldComponent,
    AccountReferenceComponent,
    NavbarComponent,
    TransactionListComponent,
    TransactionComponent,
    AllocationCenterReferenceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs', 
      level: NgxLoggerLevel.DEBUG, 
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    AngularFontAwesomeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
