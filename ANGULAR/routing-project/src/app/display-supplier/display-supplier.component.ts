import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-display-supplier',
  templateUrl: './display-supplier.component.html',
  styleUrls: ['./display-supplier.component.css']
})
export class DisplaySupplierComponent implements OnInit {

  supplierInfo:Array<Supplier>=[];
  flag:boolean=false;
  constructor(public supplierService:SupplierService, public router:Router) { }

  ngOnInit(): void {
    this.flag=true;
    this.supplierService.loadSupplierDetails().subscribe(data=>this.supplierInfo=data);
  }

 

  onclick(){
     this.router.navigate(["adminDashboard"])
  }
}
