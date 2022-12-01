import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-tally-supplier',
  templateUrl: './tally-supplier.component.html',
  styleUrls: ['./tally-supplier.component.css']
})
export class TallySupplierComponent implements OnInit {

  
  supplierInfo:Array<Supplier>=[]
  constructor(public supplierService:SupplierService,public router:Router) { }

  ngOnInit(): void {
    this.supplierService.loadSupplierTallyDetails().subscribe(data=>this.supplierInfo=data);
  }

  onpress(){

    this.router.navigate(["adminDashboard"])
  }

}
