import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-byname',
  templateUrl: './stock-byname.component.html',
  styleUrls: ['./stock-byname.component.css']
})
export class StockBynameComponent implements OnInit {
 
  flag:boolean=false
  stocks:Array<Stock>=[];
  sid1:number=0;

  constructor(public stockSer:StockServiceService,public router:Router) { }

  ngOnInit(): any {
    this.flag=true
    this.stockSer.loadstock().subscribe(data=>console.log(data));
    return this.stockSer.loadstockname().subscribe(data=>this.stocks=data);
  }

  stockByName()
  {
 
  }
  onpress(){
    this.router.navigate(["adminDashboard"])  
 
  }
}





