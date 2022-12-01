import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../bill.service';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
customer=new Customer;
  constructor(public router:Router,public billserv:BillService) { }

  ngOnInit(): void {

    let customer1=sessionStorage.getItem("customer");
    if(customer1!=null)
    {
      this.customer=JSON.parse(customer1);
    }
  }
    logout()
    {
      sessionStorage.removeItem("customer");
      this.router.navigate(["login"]);
    }

    tocart()
    {
      this.router.navigate(["cart"]);
    }

    onClickHome(){
      this.router.navigate(["dashboard"]);
    }

    onpressorders(){
      this.router.navigate(["\orderdisplay"])
    }


  

}
