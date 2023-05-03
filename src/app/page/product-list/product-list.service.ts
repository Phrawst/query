import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SharedService } from "./../../share/shared.service";
import { HttpClient } from "@angular/common/http";
import { QProductList } from "./product-list.model";

@Injectable({
  providedIn: 'root'
})

export class ProductListService {
  constructor(
    private http: HttpClient,
    private svc: SharedService
  ){}

  getList(): Observable<QProductList[]>{
    const url = this.svc.getUrl(`handsets`);
    return this.http.get<QProductList[]>(url);  
  }

}