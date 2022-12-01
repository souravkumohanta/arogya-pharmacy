import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(public httpClient:HttpClient) { }

  loadSupplierDetails():Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>("http://localhost:9191/supplier/display")
  }

  storeSupplierInfo(supplierRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9191/supplier/add",supplierRef,{responseType:'text'})
   }

   loadSupplierTallyDetails():Observable<Supplier[]>{
     return this.httpClient.get<Supplier[]>("http://localhost:9191/supplier/tally")
   }
}
