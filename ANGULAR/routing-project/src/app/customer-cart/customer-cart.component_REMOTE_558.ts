import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill.model';
import { BillService } from '../bill.service';
import { cartNation } from '../cartnation.model';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {
customer =new Customer;

//billinfo:Array<Bill>=[];
billinfo:Array<cartNation>=[];

  constructor(public billService : BillService,public router:Router) { }

billinfo:Array<Bill>=[];
msg:string="";
constructor(public billService : BillService,public router:Router) { }


  ngOnInit(): void {

    let customer1=sessionStorage.getItem("customer");
    if(customer1!=null)
    {
      this.customer=JSON.parse(customer1);
    }
    this.billService.findBillbyCustId(this.customer.cust_id).subscribe(data=>this.billinfo=data);
  }


  onPressProceed(){
    this.router.navigate(["customerbill"]);
  }

  onClickHome(){
    this.router.navigate(["dashboard"]);
  }

  logout()
  {
    sessionStorage.removeItem("customer");
    this.router.navigate(["login"]);
  }

  onPressDelete(bill_id:any){
    console.log(bill_id);
   
    this.billService.deleteBillInfo(bill_id).subscribe(result=>this.msg=result);
    window.location.reload();
  }
}
