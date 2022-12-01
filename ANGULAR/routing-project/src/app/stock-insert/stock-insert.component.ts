import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-stock-insert',
  templateUrl: './stock-insert.component.html',
  styleUrls: ['./stock-insert.component.css']
})
export class StockInsertComponent implements OnInit {

  productInfo = new FormGroup({
    stock_id:new FormControl(),
    item_name:new FormControl(),
    expiry:new FormControl(),
    quantity:new FormControl(),
    price:new FormControl(),
    type:new FormControl
    });

msg:string="";
  constructor(public productSer:StockServiceService,public router:Router) { }

  ngOnInit(): void {
  }


storeProductDetails()
{
  let ProductRef= this.productInfo.value;
 return this.productSer.insertstock(ProductRef).subscribe(data=>this.msg=data);

}
onpress(){
  this.router.navigate(["adminDashboard"])  

}
}
