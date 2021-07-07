import { Injectable } from '@angular/core';
import { Product } from '../Model/Products'
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('assets/data.json')
  }
}
