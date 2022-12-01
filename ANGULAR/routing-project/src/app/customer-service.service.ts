import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(public http:HttpClient) { }
  deleteCustomer(cust_id:any):Observable<any>
  {
    return this.http.delete("http://localhost:9191/customer/delete"+cust_id,{responseType:'text'});
  }

  addCustomer(customer:Customer):Observable<any>
  {
    return this.http.post("http://localhost:9191/customer/insert",customer,{responseType:'text'});
  }
  updateCustomer(customer:Customer):Observable<string>
  {
    return this.http.put("http://localhost:9191/customer/update",customer,{responseType:'text'});
  }

  getAllCustomer():Observable<any>
  {
    return this.http.get("http://localhost:9191/customer/display");
  }

  sortByName():Observable<any>
  {
    return this.http.get("http://localhost:9191/customer/sortbyname");
  }
  sortById():Observable<any>
  {
    return this.http.get("http://localhost:9191/customer/sortbyid");
  }
  sortByAddr():Observable<any>
  {
    return this.http.get("http://localhost:9191/customer/sortbyAdd");
  }





}
