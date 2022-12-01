import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public httpclient:HttpClient) { }

  loadCustomerDetails():Observable<Customer[]>{
    return this.httpclient.get<Customer[]>("http://localhost:9191/customer/display")
  }

  deleteCustomerInfo(cust_id:any):Observable<string>{
    console.log(cust_id)
    return this.httpclient.delete("http://localhost:9191/customer/delete/"+cust_id,{responseType:'text'})
    }

  loadCustomerDetailsBasedOnAddress():Observable<Customer[]>{
      return this.httpclient.get<Customer[]>("http://localhost:9191/customer/sortbyAdd")
  }

  
  loadCustomerDetailsBasedOnId():Observable<Customer[]>{
    return this.httpclient.get<Customer[]>("http://localhost:9191/customer/sortbyid")
  }
  

  
  loadCustomerDetailsBasedOnName():Observable<Customer[]>{
    return this.httpclient.get<Customer[]>("http://localhost:9191/customer/sortbyname")
  }
}
