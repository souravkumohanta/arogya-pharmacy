import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-sortbyaddress',
  templateUrl: './customer-sortbyaddress.component.html',
  styleUrls: ['./customer-sortbyaddress.component.css']
})
export class CustomerSortbyaddressComponent implements OnInit {

  customerInfo:Array<Customer>=[]
  flag:boolean=false
  constructor(public customerService:CustomerService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerService.loadCustomerDetailsBasedOnAddress().subscribe(data=>this.customerInfo=data);
  }

  onpress(){
    this.router.navigate(["adminDashboard"])
 }
}
