import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill.model';
import { BillService } from '../bill.service';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-after-proceed-to-pay',
  templateUrl: './after-proceed-to-pay.component.html',
  styleUrls: ['./after-proceed-to-pay.component.css']
})
export class AfterProceedToPayComponent implements OnInit {

  billRef = new Bill();
  msg:string="";
  customer = new Customer;
  constructor(public billService:BillService,public router:Router) { }

  ngOnInit(): void {
    let customer1=sessionStorage.getItem("customer");
    if(customer1!=null)
    {
      this.customer=JSON.parse(customer1);
    }
    console.log(this.customer.cust_id)

  }

  onClickHome(){
     this.router.navigate(["dashboard"]);
  }

  OnClickCart(){
     this.router.navigate(["cart"]);
  }

  logout()
  {
    sessionStorage.removeItem("customer");
    this.router.navigate(["login"]);
  }

}
  
// callService(cust_id:any) {
//   // console.log("Event fired "+this.pid)
//   console.log(cust_id)
//   this.billService.findBillInfo(cust_id).subscribe(data=> {
//     if(data==null){
//     this.msg = "Record not found";
//     // this.flag = false;
  
//     }else {
//       this.msg = "";
//       // this.flag = true;
//       this.billRef=data;        
//     }
//   })
// }
// }
