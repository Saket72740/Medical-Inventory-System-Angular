import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerName: string = "";
  customerMobile: number = 0;
  customer: Customer = new Customer();

  constructor(private customers: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let str = this.route.snapshot.paramMap.get('name');
    let str2 = this.route.snapshot.paramMap.get('mobile');
    console.log(str + " | " + str2);
    if(str != null && str2 != null){
      this.customerName = str;
      this.customerMobile = Number.parseInt(str2);
      this.customer = this.customers.searchCustomerById(id);
    }  
  }





}
