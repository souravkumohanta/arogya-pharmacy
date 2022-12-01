import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-delete-bill',
  templateUrl: './delete-bill.component.html',
  styleUrls: ['./delete-bill.component.css']
})
export class DeleteBillComponent implements OnInit {

  msg : string  =""
  constructor(public billService : BillService, public router:Router) { }

  ngOnInit(): void {
  }

  deleteBill(bill_id:any){
    this.billService.deleteBillInfo(bill_id).subscribe(result=>this.msg=result);
  }

  onpress(){
     this.router.navigate(["adminDashboard"])
  }
}
