import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-types/sellersignup';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(productData:product)
  {
    return this.http.post('http://localhost:3000/products',productData);
  }

  productRetrieve()
  {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
}
