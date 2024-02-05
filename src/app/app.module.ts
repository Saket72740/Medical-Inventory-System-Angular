import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { LoginComponent } from './login/login.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { BillSectionComponent } from './bill-section/bill-section.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MedicinesListComponent,
    LoginComponent,
    AddMedicineComponent,
    BillSectionComponent,
    TransactionHistoryComponent,
    EditMedicineComponent,
    SearchComponent,
    HomeComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
