import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent implements OnInit {

  msg:string=""
  constructor(public productSer:StockServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  updateProductInfo(productInfo:any){
    
    this.productSer.updateStock(productInfo).subscribe(data=>this.msg=data);
  }
  onpress(){
    this.router.navigate(["adminDashboard"])  
 
  }
}
