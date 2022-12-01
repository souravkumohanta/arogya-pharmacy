import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-by-date-sort',
  templateUrl: './order-by-date-sort.component.html',
  styleUrls: ['./order-by-date-sort.component.css']
})
export class OrderByDateSortComponent implements OnInit {
  ordersqw:Array<Order>=[];
  constructor(public orderSer:OrderServiceService,public router:Router) { }

  ngOnInit():void {
    this.orderSer.displayAllOrdersByDate().subscribe(data=>console.log(data));
   this.orderSer.displayAllOrdersByDate().subscribe(data=>this.ordersqw=data);
  
  //this.orderSer.displayOrders().subscribe(data=>this.ordersqw=data);
}

onpress(){
  this.router.navigate(["adminDashboard"])  

}
}
