import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill.model';
import { BillService } from '../bill.service';
import { cart } from '../cart.model';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {


cart = new cart;
customer =new Customer;
bill = new Bill;

customer =new Customer;

billinfo:Array<Bill>=[];
//billinfo:Array<cartNation>=[];

  constructor(public billService : BillService,public router:Router) { }


  ngOnInit(): void {

    let customer1=sessionStorage.getItem("customer");
   
    if(customer1!=null)
    {
      this.customer=JSON.parse(customer1);
    
    }
    this.billService.findBillbyCustId(this.customer.cust_id).subscribe(data=>this.billinfo=data);
    console.log(this.customer.cust_id);
  }


  onPressProceed(cust_id:any){
      this.router.navigate(["customerbill"]);
      console.log(this.customer.cust_id);
      this.billService.findBillbyCustId(cust_id).subscribe(result=>this.msg=result);
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
