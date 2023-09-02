import { Component, OnInit } from '@angular/core';
import { product } from '../data-types/sellersignup';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  productMessage:string|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }
  submitProduct(data:product):void
  {
    this.product.addProduct(data).subscribe((result)=>
    {
      console.warn(result);
      if(result)
      {
        this.productMessage='Product is successfull added!';
        
      }
    }
    );
    setTimeout(()=> (this.productMessage = undefined ,3000));
    
  }
}


