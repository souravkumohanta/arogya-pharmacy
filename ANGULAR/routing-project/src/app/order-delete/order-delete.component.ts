import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderServiceService } from '../order.service.service';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {

  msg:string="";

  constructor(public orderSer:OrderServiceService,public router:Router) { }

  ngOnInit(): void {
  }


  deleteProduct(id:any)
  {
      return this.orderSer.deleteOrders(id).subscribe(data=>this.msg=data);
  }
  onpress(){
    this.router.navigate(["adminDashboard"])  
 
  }
}
