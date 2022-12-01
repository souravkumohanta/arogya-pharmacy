import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {
/*
  orderInfo = new FormGroup({
    order_id:new FormControl(),
    items:new FormControl(),
    amount:new FormControl(),
    bill_id:new FormControl(),
    cust_id:new FormControl(),
    order_date:new FormControl
    });
*/
  constructor(public orderSer:OrderServiceService,public router:Router) { }

  msg:string="";

  ngOnInit(): void {
  }

updateOrder(productInfo:any)
{
/*
  let ordRef= this.orderInfo.value;
  this.orderSer.updateOrders(ordRef).subscribe(data=>this.msg=data);
*/
this.orderSer.updateOrders(productInfo).subscribe(data=>this.msg=data);
}
onpress(){
  this.router.navigate(["adminDashboard"])  

}
}
