import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  customerList: Customer[] = [];
  filteredcustomer: Customer[] = [];
  searchName: string = "";
  searchMobile: number = 0;
  flag = false;
  constructor(private customers: CustomersService) { }

  ngOnInit(): void {
    this.customerList = this.customers.customerList;
  }

  search(): void{
    if(this.searchName == ''){
      alert('Please enter valid name');
      return ;
    }
    else if(this.searchMobile == 0 || (this.searchMobile/100000000 < 6 && this.searchMobile/100000000 != 3) || this.searchMobile/1000000000 >= 10) {
      alert('Please enter valid mobile number');
      return ;
    }
    this.filteredcustomer = this.customers.searchCustomers(this.searchName, this.searchMobile);
    console.log("Filtered Customers "  + this.filteredcustomer);
    this.flag = true;
  }
}
