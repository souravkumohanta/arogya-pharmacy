import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-stock-delete',
  templateUrl: './stock-delete.component.html',
  styleUrls: ['./stock-delete.component.css']
})
export class StockDeleteComponent implements OnInit {

  
  constructor(public productSer:StockServiceService,public router:Router) { }
  
  msg:string="";

  ngOnInit(): void {
  }

  deleteProduct(id:any){
    
    this.productSer.deleteStock(id).subscribe(result=>this.msg=result);
  }
  onpress(){
    this.router.navigate(["adminDashboard"])  
 
  }
}
