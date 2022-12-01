import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-displayadminstock',
  templateUrl: './displayadminstock.component.html',
  styleUrls: ['./displayadminstock.component.css']
})
export class DisplayadminstockComponent implements OnInit {
  flag:boolean=true
  stockinfo:Array<Stock>=[];
  constructor(public stockService:StockServiceService,public router:Router) { }

  ngOnInit():any {
    this.flag=true
    return this.stockService.loadstock().subscribe(data=>this.stockinfo=data);
  }

  onpress(){
    this.router.navigate(["adminDashboard"])
  }
}
