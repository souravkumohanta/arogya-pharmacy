import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {

  flag:boolean=false
  orders:Array<Order>=[];
  constructor(public orderSer:OrderServiceService,public router:Router) { }

  ngOnInit() {


   this.orderSer.displayOrders().subscribe(data=>this.orders=data);

  
  }

  loadData(){
    this.flag=true
    return this.orderSer.displayOrders().subscribe(data=>this.orders=data);

  }
  onpress(){
    this.router.navigate(["adminDashboard"])  
 
  }


}
