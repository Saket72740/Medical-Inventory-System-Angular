import { Injectable } from '@angular/core';
import { MedicinesService } from './medicines.service';
import { Customer } from './customer'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private medicines: MedicinesService) { }
  searchList: Customer[] = [];
  customerList: Customer[] = [
    {id:1, name: "Saket Kumar", mobile_no: 9876543210, email: "saket@gmail.com", address: "Sector-5, Kolkata", 
      medicines:[
                  {med_id: "SK102", med_name: "Pudin Hara", med_composition: "Pudina Satva", med_quantity: 3, med_price: 15},
                  {med_id: "SK101", med_name: "Unienzyme", med_composition: "Fungal Diastase 100mg, Papain 60mg, and Charcoal 75mg", med_quantity: 2, med_price: 30},
                  {med_id: "SK106", med_name: "Dytor 40", med_composition: "Torsemide 40mg", med_quantity: 1, med_price: 85},
                ],
      amountPaid: 190 ,
      dateOfBought: new Date('12/21/2022')
    },
    {id:2, name: "Gaurabh Shrivastav", mobile_no: 9876325410, email: "gaurabh@gmail.com", address: "DumDum, Kolkata", 
      medicines:[ 
                  {med_id: "SK101", med_name: "Unienzyme", med_composition: "Fungal Diastase 100mg, Papain 60mg, and Charcoal 75mg", med_quantity: 2, med_price: 30},
                  {med_id: "SK106", med_name: "Dytor 40", med_composition: "Torsemide 40mg", med_quantity: 1, med_price: 85},
                  {med_id: "SK102", med_name: "Pudin Hara", med_composition: "Pudina Satva", med_quantity: 3, med_price: 15},
                ],
      amountPaid: 190,
      dateOfBought: new Date('12/22/2022')
    },
  ];
  
  addCustomer(customer: Customer): void{
    this.customerList.push(customer);
  }

  searchCustomers(customerName: string, customerMobile: number): Customer[]{
    this.searchList = [];
    let pattern = new RegExp(customerName.toLowerCase());
    for(let i=0;i<this.customerList.length;i++){
      var str = this.customerList[i].name?.toLowerCase();
      console.log("str " + str);
      if((str != null && pattern.test(str)) && customerMobile === this.customerList[i].mobile_no){
        this.searchList.push(this.customerList[i]);
      }
    }
    return this.searchList;
  }

  searchCustomerById(id: number): Customer{
    if(id > this.customerList.length)
      return new Customer;
    return this.customerList[id-1];
  }
}
