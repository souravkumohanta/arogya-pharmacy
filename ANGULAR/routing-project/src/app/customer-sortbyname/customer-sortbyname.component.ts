import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-sortbyname',
  templateUrl: './customer-sortbyname.component.html',
  styleUrls: ['./customer-sortbyname.component.css']
})
export class CustomerSortbynameComponent implements OnInit {

  customerInfo:Array<Customer>=[]
  flag:boolean=false
  constructor(public customerService:CustomerService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerService.loadCustomerDetailsBasedOnName().subscribe(data=>this.customerInfo=data);
  }


  onpress(){
    this.router.navigate(["adminDashboard"])
 }
}
