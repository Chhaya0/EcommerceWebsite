import { Component, OnInit } from '@angular/core';
import { product } from '../data-types/sellersignup';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[];
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.productRetrieve().subscribe((result)=>{
      console.warn(result);
      this.productList=result;
    });
  }
  // deleteProduct(a:number)
  // {

  // }

}
