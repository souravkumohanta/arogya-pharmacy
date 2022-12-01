import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Stock } from "./stock.model";


@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(public httpClient:HttpClient){}

  loadstock():Observable<Stock[]>{
    return this.httpClient.get<Stock[]>("http://localhost:9191/medstock/displayall");
}


insertstock(StockRef:any):Observable<string>{
    
// this.httpClient.post("http://localhost:9191/medstock/insert",StockRef).subscribe(data=>console.log(data));
return this.httpClient.post("http://localhost:9191/medstock/insert",StockRef,{responseType:'text'})
  }

updateStock(StockRef:any):Observable<string>{
   this.httpClient.put("http://localhost:9191/medstock/update",StockRef).subscribe(data1=>console.log(data1));
return this.httpClient.put("http://localhost:9191/medstock/update",StockRef,{responseType:'text'})
  }

deleteStock(id:number):Observable<string>
{
  this.httpClient.delete("http://localhost:9191/medstock/delete/"+id).subscribe(q=>console.log(q));
  return this.httpClient.delete("http://localhost:9191/medstock/delete/"+id,{responseType:'text'})
}  


loadstockname():Observable<Stock[]>{
  return this.httpClient.get<Stock[]>("http://localhost:9191/medstock/displayname");
}

loadstocknamedesc():Observable<Stock[]>{
  return this.httpClient.get<Stock[]>("http://localhost:9191/medstock/displaynamedesc");
}



/*





*/
}



