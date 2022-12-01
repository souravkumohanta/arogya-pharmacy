import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { BillService } from '../bill.service';
import { cart } from '../cart.model';
import { Customer } from '../customer.module';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock.model';




@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {
 
  searchText:string=""
  customer=new Customer;
  cartData=new cart;
  flag:boolean=true
  stockinfo:Array<Stock>=[];
  constructor(public stockser:StockServiceService,public router:Router,public billserv:BillService) { }

  ngOnInit() {
    let customer1=sessionStorage.getItem("customer");
    if(customer1!=null)
    {
      this.customer=JSON.parse(customer1);
    }
    return this.stockser.loadstock().subscribe(data=>this.stockinfo=data);
  }

  loadData(){
    this.flag=true
    return this.stockser.loadstock().subscribe(data=>this.stockinfo=data);
  }

  onpress(){
    this.router.navigate(["login"])  
 
  }
  
  add(cart_id:any,cust:any)
  {
    this.cartData.bid=cart_id;
    this.cartData.cid=cust;
    return this.billserv.addToCart(this.cartData).subscribe(data=>this.cartData);
  }
}
