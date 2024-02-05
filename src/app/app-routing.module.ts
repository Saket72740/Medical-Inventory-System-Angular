import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AuthentGuard } from './authent/authent.guard';
import { BillSectionComponent } from './bill-section/bill-section.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { SearchComponent } from './search/search.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  {path: 'medicineList', component:MedicinesListComponent},
  {path: 'login', component:LoginComponent},
  {path: 'addMedicine', component: AddMedicineComponent, canActivate: [AuthentGuard]},
  {path: 'transactionHistory', component: TransactionHistoryComponent, canActivate: [AuthentGuard]},
  {path: 'transactionHistory/customerSearch/:id/:mobile/:name', component: CustomerDetailsComponent, canActivate: [AuthentGuard]},
  {path: 'billSection', component: BillSectionComponent, canActivate: [AuthentGuard]},
  {path: 'medicineList/editMedicine/:id', component: EditMedicineComponent, canActivate: [AuthentGuard]},
  {path: 'medicineList/searchMedicine/:filteredMedicine', component: SearchComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
