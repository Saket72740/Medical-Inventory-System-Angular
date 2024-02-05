import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';
import { Medicine } from '../medicine';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  addedMedicine: Medicine = new Medicine();
  constructor(private router: Router, private medicines: MedicinesService) { }

  ngOnInit(): void {

  }

  addMeds(): void{
    console.log("Inside add-medicine-component addMeds method");
    if(this.addedMedicine.med_id == '' || this.addedMedicine.med_id == undefined){
      alert('Please enter valid Medicine Id');
      return;
    }
    else if(this.addedMedicine.med_name == '' || this.addedMedicine.med_name == undefined){
      alert('Please enter valid Medicine name');
      return;
    }
    else if(this.addedMedicine.med_composition == '' || this.addedMedicine.med_composition == undefined){
      alert('Please enter valid Medicine composition');
      return;
    }
    else if(this.addedMedicine.med_price <= 0 ){
      alert('Please enter valid Medicine price');
      return;
    }
    else if(this.addedMedicine.med_quantity <= 0 ){
      alert('Please enter valid Medicine quantity');
      return;
    }
    // console.log(this.addedMedicine);
    for(let i=0;i<this.medicines.medicineList.length;i++){
      if(this.addedMedicine.med_id === this.medicines.medicineList[i].med_id){
        alert('The medicine id is already registered in medicine list');
        return ;
      }
    }
    this.medicines.addMedicine(this.addedMedicine);
    console.log(this.medicines.medicineList)
    this.router.navigate(['medicineList']);
  }

}
