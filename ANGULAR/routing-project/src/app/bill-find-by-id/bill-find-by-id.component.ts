import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill.model';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-find-by-id',
  templateUrl: './bill-find-by-id.component.html',
  styleUrls: ['./bill-find-by-id.component.css']
})
export class BillFindByIdComponent implements OnInit {

  
  billInfo:Array<Bill>=[]
  billRef = new Bill();
  cust_id : number=0;
  msg:string=""
  flag:boolean=false;
  a:any=""
  constructor(public billService : BillService,public router:Router) { }

  ngOnInit(): void {
    // this.billService.findBillById(this.bill_id).subscribe(data=> {
    //   if(data==null){
    //   this.msg = "Record not found";
    //   this.flag = false;
    
    //   }else {
    //     this.msg = "";
    //     this.flag = true;
    //     this.billRef=data;        
    //   }
    // })
  }

  callService(cust_id:any) {
    // console.log("Event fired "+this.pid)
    this.billService.findBillInfo(this.cust_id).subscribe(data=> {
      if(data==null){
      this.msg = "Record not found";
      // this.flag = false;
    
      }else {
        this.msg = "";
        // this.flag = true;
        this.billRef=data;        
      }
    })
    this.billService.findBillbyCustId(cust_id).subscribe(result=>this.msg=result);
  }

  // findProduct(bid:any){
  //   console.log(bid);
  //   this.billService.findBillInfo(bid).subscribe(result=>this.msg=result);
  // }

  onpress(){
    this.router.navigate(["adminDashboard"])
  }

}
