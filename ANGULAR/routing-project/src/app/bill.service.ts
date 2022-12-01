import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from './bill.model';
import {cart} from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(public httpClient:HttpClient) { }

  loadBillDetails():Observable<Bill[]>{
    return this.httpClient.get<Bill[]>("http://localhost:9191/bill/display");
  }

  storeBillInfo(billRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9191/bill/add",billRef,{responseType:'text'});
  }

  updateBillInfo(billRef:any ):Observable<string>{
    return this.httpClient.put("http://localhost:9191/bill/update",billRef,{responseType:'text'});
  }

  deleteBillInfo(bill_id:any):Observable<string>{
    return this.httpClient.delete("http://localhost:9191/bill/delete/"+bill_id,{responseType:'text'})
  }

  findBillInfo(bill_id:any):Observable<any>{
    return this.httpClient.get("http://localhost:9191/bill/findBill/"+bill_id);
  }

  addToCart(cartref:any):Observable<any>
  {
    return this.httpClient.post("http://localhost:9191/bill/cart",cartref,{responseType:'text'});
  }

  findBillbyCustId(id:any):Observable<any>
  {
    console.log(id);
    return this.httpClient.get("http://localhost:9191/bill/findcust/"+id);
  }
}
