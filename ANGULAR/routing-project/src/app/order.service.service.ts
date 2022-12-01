import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Order } from "./order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(public httpClient:HttpClient){}


  displayOrders():Observable<Order[]>{
    return this.httpClient.get<Order[]>("http://localhost:9191/order/display");
}


insertOrders(StockRef:any):Observable<string>{
    
// this.httpClient.post("http://localhost:9191/order/insert",StockRef).subscribe(data=>console.log(data));
return this.httpClient.post("",StockRef,{responseType:'text'})
  }

updateOrders(StockRef:any):Observable<string>{
   this.httpClient.put("",StockRef).subscribe(data1=>console.log(data1));
return this.httpClient.put("http://localhost:9191/order/update",StockRef,{responseType:'text'})
  }

deleteOrders(id:number):Observable<string>
{
  this.httpClient.delete("http://localhost:9191/order/delete/"+id).subscribe(q=>console.log(q));
  return this.httpClient.delete("http://localhost:9191/order/delete/"+id,{responseType:'text'})
}  


displayAllOrdersByDate():Observable<Order[]>{
    return this.httpClient.get<Order[]>("http://localhost:9191/order/displaydate");
}

displayByQuantity():Observable<Order[]>{
    return this.httpClient.get<Order[]>("http://localhost:9191/order/displayquan");
}


displayByYearMonth(year:number, month:number):Observable<Order[]>{


  return  this.httpClient.get<Order[]>("http://localhost:9191/order/month/" +year +"/"+month );
}
/*

    year month

*/

}
