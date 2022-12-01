import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.module';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  customerInfo:Array<Customer>=[];
  flag:boolean = false;
  constructor(public customerService:CustomerService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerService.loadCustomerDetails().subscribe(data=>this.customerInfo=data);
  }

 onpress(){
   this.router.navigate(["adminDashboard"])
 }

}
