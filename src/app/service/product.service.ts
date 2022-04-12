import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  warehouse: any;
  name: any;
  price: any;
  Type: any;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<any>('../../assets/Products.json');
  }
}
