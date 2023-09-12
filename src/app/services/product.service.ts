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
  deleteProduct(id:number)
  {
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct(id:string)
  {
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product:product) //single update product
  {
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)
  }
//displaying products in big carousel 
  popularProducts()
  {
    return this.http.get<product[]>(`http://localhost:3000/products?_limit=4`); //_limit=4 means it wll give only 4 products and not total list
  }

//displaying prducts in trendy crousel(real world this will come from backend calculations)
trendyProducts()
{
  return this.http.get<product[]>(`http://localhost:3000/products?_limit=8`);
}
searchProducts(query:string)
{
  return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
}
}
