import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-insert',
  templateUrl: './order-insert.component.html',
  styleUrls: ['./order-insert.component.css']
})
export class OrderInsertComponent implements OnInit {

  orderInfo = new FormGroup({
    order_id:new FormControl(),
    items:new FormControl(),
    amount:new FormControl(),
    bill_id:new FormControl(),
    cust_id:new FormControl(),
    order_date:new FormControl
    });


  msg:string="";

  constructor(public orderSer:OrderServiceService,public router:Router) { }

  ngOnInit(): void {
  }

orderinsert()
{
  let ordRef= new this.orderInfo.value;
  return this.orderSer.insertOrders(ordRef).subscribe(data=>this.msg=data);
}
onpress(){
  this.router.navigate(["adminDashboard"])  

}
}
