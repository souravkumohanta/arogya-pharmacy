import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatusComponent } from './contatus/contatus.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DisplayBillComponent } from './display-bill/display-bill.component';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { StockComponent } from './stock/stock.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { StockInsertComponent } from './stock-insert/stock-insert.component';
import { TestComponettComponent } from './test-componett/test-componett.component';


import { StoreBillComponent } from './store-bill/store-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { DeleteBillComponent } from './delete-bill/delete-bill.component';
import { BillFindByIdComponent } from './bill-find-by-id/bill-find-by-id.component';
import { DisplaySupplierComponent } from './display-supplier/display-supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { TallySupplierComponent } from './tally-supplier/tally-supplier.component';

import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { OrderInsertComponent } from './order-insert/order-insert.component';
import { OrderUpdateComponent } from './order-update/order-update.component';
import { OrderByQuantityComponent } from './order-by-quantity/order-by-quantity.component';
import { OrderByDateSortComponent } from './order-by-date-sort/order-by-date-sort.component';
import { OrderByYearMonthComponent } from './order-by-year-month/order-by-year-month.component';
import { StockBynameComponent } from './stock-byname/stock-byname.component';
import { StockBynamedescComponent } from './stock-bynamedesc/stock-bynamedesc.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MyGuard } from './app.guard';

import { DisplayCustomerComponent } from './display-customer/display-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CustomerSortbyaddressComponent } from './customer-sortbyaddress/customer-sortbyaddress.component';
import { CustomerSortbyidComponent } from './customer-sortbyid/customer-sortbyid.component';
import { CustomerSortbynameComponent } from './customer-sortbyname/customer-sortbyname.component';
import { DisplayadminstockComponent } from './displayadminstock/displayadminstock.component';
import { AfterProceedToPayComponent } from './after-proceed-to-pay/after-proceed-to-pay.component';






@NgModule({
  declarations: [
    AppComponent,
    ContatusComponent,
    LoginComponent,
    DashboardComponent,
    DisplayBillComponent,
 
    StockComponent,
    StockUpdateComponent,
    StockDeleteComponent,

    StockInsertComponent,

    TestComponettComponent,

   


    TestComponettComponent,



    StockInsertComponent,
    TestComponettComponent,


    StockInsertComponent,



    RegisterComponent,
    StockComponent,
    StoreBillComponent,
    UpdateBillComponent,
    DeleteBillComponent,
    BillFindByIdComponent,
    DisplaySupplierComponent,
    AddSupplierComponent,
    TallySupplierComponent,



    OrderDeleteComponent,
    OrderDisplayComponent,
    OrderInsertComponent,
    OrderUpdateComponent,
    OrderByQuantityComponent,
    OrderByDateSortComponent,
    OrderByYearMonthComponent,
    StockBynameComponent,
    StockBynamedescComponent,

    LandingPageComponent,
    AdminDashboardComponent,

    DisplayCustomerComponent,
    DeleteCustomerComponent,

    CustomerCartComponent,

    CustomerSortbyaddressComponent,

    CustomerSortbyidComponent,

    CustomerSortbynameComponent,

    DisplayadminstockComponent,

    AfterProceedToPayComponent,
  




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgbModule,HttpClientModule
  ],
  providers: [MyGuard],//MyGuard

  bootstrap: [AppComponent]
})
export class AppModule { }
