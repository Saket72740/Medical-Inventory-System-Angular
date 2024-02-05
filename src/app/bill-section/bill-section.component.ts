import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { Medicine } from '../medicine';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-bill-section',
  templateUrl: './bill-section.component.html',
  styleUrls: ['./bill-section.component.css']
})
export class BillSectionComponent implements OnInit {

  totalPrice : number = 0;
  addedmedicineList: Medicine[] = [];
  medicineList: Medicine[] = [];
  medicine: Medicine = new Medicine;
  customer: Customer = new Customer;
  meds_name: string = '-----';
  flag = false;
  constructor(private users: CustomersService, private medicines: MedicinesService, private router: Router) { }

  ngOnInit(): void {
    this.medicineList = this.medicines.getAllMedicines();
  }

  addMedicine(){
    this.medicine.med_name = this.meds_name;
    console.log(this.meds_name);
    if(this.meds_name == '-----'){
      alert("Please enter the name of medicine");
      this.medicine = new Medicine;
      return ;
    }
    // else if(this.medicine.med_quantity <= 0){
    //   alert("Please enter medicine quantity greater than 0.");
    //   this.medicine = new Medicine;
    //   return ;
    // }
    // else if(this.medicines.getMedicineId(this.medicine.med_name) == undefined){
    //   alert("Sorry we don't have this medicine");
    //   this.medicine = new Medicine;
    //   return ;
    // }
    else if(this.medicine.med_quantity > this.medicines.getMedicineQuanity(this.medicine.med_name)){
      alert("Sorry we don't have that much medicine. Available medicine: " + this.medicines.getMedicineQuanity(this.medicine.med_name) + " quantity");
      return ;
    }
    this.medicine.med_id = this.medicines.getMedicineId(this.medicine.med_name);
    this.medicine.med_composition = this.medicines.getMedicineComposition(this.medicine.med_name);
    this.medicine.med_price = this.medicines.getMedicinePrice(this.medicine.med_name);
    this.totalPrice += this.medicine.med_price * this.medicine.med_quantity;
    this.addedmedicineList.push(this.medicine);
    this.medicine = new Medicine;
    // this.meds_name = '-----';
  }

  // pushCustomer(){
  //   this.users.addCustomer(this.customer);
  //   this.customer = new Customer;
  // }

  deleteMedicine(meds: Medicine){
    this.totalPrice -= meds.med_price*meds.med_quantity;
    var index = this.addedmedicineList.indexOf(meds);
    let medic = this. addedmedicineList.splice(index, 1);
    console.log(this.addedmedicineList);
  }

  putMedicineAndCustomer(): void{
    // if(this.customer.name == '' || this.customer.name == undefined){
    //   alert('Please enter the customer name');
    //   return ;
    // }
    if(this.customer.mobile_no == undefined || (this.customer.mobile_no/100000000 < 6 && this.customer.mobile_no/100000000 != 3 && this.customer.mobile_no/1000000000 >= 10)){
      alert('Please enter valid customer mobile number');
      return ;
    }
    // else if(this.customer.address == '' || this.customer.address == undefined){
    //   alert('Please enter the customer address');
    //   return ;
    // }
    else if(this.addedmedicineList == null || this.addedmedicineList.length == 0){
      alert('Please enter some medicine of user');
      return ;
    }
    this.medicines.updateMedicine(this.addedmedicineList);
    this.customer.medicines = this.addedmedicineList;
    this.customer.dateOfBought = new Date();
    this.customer.amountPaid = this.totalPrice;
    this.customer.id = this.users.customerList.length+1;
    this.users.addCustomer(this.customer);
    console.log('All medicine of the customer added successfully');
    alert('Customer detail saved successfully');
    this.router.navigate(['transactionHistory/customerSearch/', this.customer.id, this.customer.mobile_no, this.customer.name]);
  }

  showForm(){
    this.flag = true;
  }

  getQuantity(): number{
    return this.medicines.getMedicineQuanity(this.medicine.med_name);
  }

  updateMed_name(e: any){
    this.meds_name = e.target.value;
  }
}
