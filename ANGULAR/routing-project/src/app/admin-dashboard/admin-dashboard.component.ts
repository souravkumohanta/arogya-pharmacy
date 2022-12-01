import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer.module';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  customer=new Customer;

  constructor(public router:Router,public CustService:CustomerServiceService) { }

  ngOnInit(): void {
  }

  logout()
  {
    sessionStorage.removeItem("customer");
    this.router.navigate(["login"]);
  }

  display = false;


 onPressDisplay(){
   this.router.navigate(["displaybills"])
 }
 onPressStore(){
  this.router.navigate(['storebills'])
}
onPressUpdate(){
  this.router.navigate(['alterbills'])
}
onPressDelete(){
  this.router.navigate(['deletebills'])
}
onPressFind(){
  this.router.navigate(['billid'])
}

onPressStockDisplay(){
  this.router.navigate(["stockadmindisplay"])
}
onPressStockStore(){
  this.router.navigate(["stockinsert"])
}
onPressStockUpdate(){
  this.router.navigate(["stockupdate"])
}
onPressStockDelete(){
  this.router.navigate(["stockdelete"])
}
onPressStockDisplayAsc(){
  this.router.navigate(["stockbyname"])
}
onPressStockDisplayDsc(){
  this.router.navigate(["stockbynamedesc"])
}

onPressOrderDisplay(){
  this.router.navigate(["orderdisplay"])
}
onPressOrderStore(){
  this.router.navigate(["orderinsert"])
}
onPressOrderUpdate(){
  this.router.navigate(["orderupdate"])
}
onPressOrderDelete(){
  this.router.navigate(["orderdelete"])
}
onPressOrderDisplayDsc(){
  this.router.navigate(["orderdisplayquan"])
}
onPressOrderDisplayDate(){
  this.router.navigate(["orderdatesort"])
}
onPressOrderDisplayYear(){
  this.router.navigate(["orderyearmonthdisplay"])
}

onPressSupplierDisplay(){
  this.router.navigate(["supplierdisplay"])
}
onPressSupplierStore(){
  this.router.navigate(["supplierinsert"])
}
onPressSupplierMonthEnd(){
  this.router.navigate(["suppliermonthendtally"])
}

onPressCustomerDisplay(){
  this.router.navigate(["customerdisplay"])
}
onPressCustomerStore(){
  this.router.navigate(["customerdelete"])
}
onPressCustomerId(){
  this.router.navigate(["customerbyid"])
}
onPressCustomerName(){
  this.router.navigate(["customerbyname"])
}
onPressCustomerAddress(){
  this.router.navigate(["customerbyaddress"])
}

onClickHome(){
  this.router.navigate(["adminDashboard"]);
}
}
