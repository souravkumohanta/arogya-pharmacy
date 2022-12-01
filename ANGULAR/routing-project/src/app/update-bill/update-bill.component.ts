import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {

  msg:string=""
  constructor(public billService : BillService,public router:Router) { }

  ngOnInit(): void {
  }

  updateBillInfo(billInfo:any){
    this.billService.updateBillInfo(billInfo).subscribe(data=>this.msg=data);
  }

  onpress(){
    this.router.navigate(["adminDashboard"])
  }

}
