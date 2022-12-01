import { NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AfterProceedToPayComponent } from './after-proceed-to-pay/after-proceed-to-pay.component';
import { BillFindByIdComponent } from './bill-find-by-id/bill-find-by-id.component';
import { ContatusComponent } from './contatus/contatus.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CustomerSortbyaddressComponent } from './customer-sortbyaddress/customer-sortbyaddress.component';
import { CustomerSortbyidComponent } from './customer-sortbyid/customer-sortbyid.component';
import { CustomerSortbynameComponent } from './customer-sortbyname/customer-sortbyname.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteBillComponent } from './delete-bill/delete-bill.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { DisplayBillComponent } from './display-bill/display-bill.component';
import { DisplayCustomerComponent } from './display-customer/display-customer.component';
import { DisplaySupplierComponent } from './display-supplier/display-supplier.component';
import { DisplayadminstockComponent } from './displayadminstock/displayadminstock.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { OrderByDateSortComponent } from './order-by-date-sort/order-by-date-sort.component';
import { OrderByQuantityComponent } from './order-by-quantity/order-by-quantity.component';
import { OrderByYearMonthComponent } from './order-by-year-month/order-by-year-month.component';
import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { OrderInsertComponent } from './order-insert/order-insert.component';
import { OrderUpdateComponent } from './order-update/order-update.component';
import { RegisterComponent } from './register/register.component';

import { StockBynameComponent } from './stock-byname/stock-byname.component';
import { StockBynamedescComponent } from './stock-bynamedesc/stock-bynamedesc.component';
import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { StockInsertComponent } from './stock-insert/stock-insert.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { StockComponent } from './stock/stock.component';

import { StoreBillComponent } from './store-bill/store-bill.component';
import { TallySupplierComponent } from './tally-supplier/tally-supplier.component';

import { TestComponettComponent } from './test-componett/test-componett.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';

const routes: Routes = [
{path:"register",component:RegisterComponent},
{path:"\login",component:LoginComponent},
{path:"\aboutus",component:ContatusComponent},
{path:"\home",component:DashboardComponent},
{path:"",component:LandingPageComponent},
{path:"\landing",component:LandingPageComponent},
{path:"\dashboard",component:DashboardComponent},
{path:"\adminDashboard",component:AdminDashboardComponent},
{path:"test",component:TestComponettComponent},
{path:"\supplier",component:DisplaySupplierComponent},

{path:"\stockadmindisplay",component:DisplayadminstockComponent},
{path:"\stockdisplay",component:StockComponent},
{path:"\stockbyname",component:StockBynameComponent},
{path:"\stockbynamedesc",component:StockBynamedescComponent},
{path:"\stockdelete",component:StockDeleteComponent},
{path:"\stockinsert",component:StockInsertComponent},
{path:"\stockupdate",component:StockUpdateComponent},

{path:"\orderupdate",component:OrderUpdateComponent},
{path:"\orderinsert",component:OrderInsertComponent},
{path:"\orderdisplay",component:OrderDisplayComponent},
{path:"\orderdelete",component:OrderDeleteComponent},
{path:"\orderdisplayquan",component:OrderByQuantityComponent},
{path:"\orderdatesort",component:OrderByDateSortComponent},
{path:"\orderyearmonthdisplay",component:OrderByYearMonthComponent},

{path:"\displaybills",component:DisplayBillComponent},
{path:"\storebills",component:StoreBillComponent},
{path:"\alterbills",component:UpdateBillComponent},
{path:"\deletebills",component:DeleteBillComponent},
{path:"\billid",component:BillFindByIdComponent},

{path:"\supplierdisplay",component:DisplaySupplierComponent},
{path:"\supplierinsert",component:AddSupplierComponent},
{path:"\suppliermonthendtally",component:TallySupplierComponent},


{path:"\customerdisplay",component:DisplayCustomerComponent},
{path:"\customerdelete",component:DeleteCustomerComponent},
{path:"\customerbyid",component:CustomerSortbyidComponent},
{path:"\customerbyname",component:CustomerSortbynameComponent},
{path:"\customerbyaddress",component:CustomerSortbyaddressComponent},

{path:"\cart",component:CustomerCartComponent},
{path:"\customerbill",component:AfterProceedToPayComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
