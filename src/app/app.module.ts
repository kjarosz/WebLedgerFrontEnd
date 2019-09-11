import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from "./components/account/account.component";
import { AllocationCenterListComponent } from './components/allocation-center-list/allocation-center-list.component';
import { AllocationCenterComponent } from './components/allocation-center/allocation-center.component';
import { TextFieldComponent } from './components/text-field/text-field.component';

const routes: Routes = [
  { path: "", redirectTo: "allocationcenters", pathMatch: "full" },
  { path: "accounts", component: AccountListComponent },
  { path: "accounts/:id", component: AccountComponent },
  { path: "allocationcenters", component: AllocationCenterListComponent },
  { path: "allocationcenters/:id", component: AllocationCenterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountComponent,
    AllocationCenterListComponent,
    AllocationCenterComponent,
    TextFieldComponent
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
