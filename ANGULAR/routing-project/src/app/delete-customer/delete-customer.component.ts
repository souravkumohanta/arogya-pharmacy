import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  msg:string=""
  constructor(public customerService:CustomerService,public router:Router) { }

  ngOnInit(): void {
  }

  deleteCustomer(cust_id:any){
    console.log(cust_id);
    this.customerService.deleteCustomerInfo(cust_id).subscribe(result=>this.msg=result);
  }

  onpress(){

    this.router.navigate(["adminDashboard"])
  }

}
