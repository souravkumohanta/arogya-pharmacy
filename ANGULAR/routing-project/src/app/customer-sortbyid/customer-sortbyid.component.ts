import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-sortbyid',
  templateUrl: './customer-sortbyid.component.html',
  styleUrls: ['./customer-sortbyid.component.css']
})
export class CustomerSortbyidComponent implements OnInit {

  customerInfo:Array<Customer>=[]
  flag:boolean=false
  constructor(public customerService:CustomerService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerService.loadCustomerDetailsBasedOnId().subscribe(data=>this.customerInfo=data);
  }

  onpress(){
    this.router.navigate(["adminDashboard"])
 }

}
