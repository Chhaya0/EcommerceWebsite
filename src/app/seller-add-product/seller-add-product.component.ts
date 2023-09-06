import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { product } from '../data-types/sellersignup';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  @ViewChild("name") name:any;
  @ViewChild("price") price:any;
  @ViewChild("color") color:any;
  @ViewChild("category") category:any;
  @ViewChild("description") description:any;
  @ViewChild("image") image:any;
  
  productMessage:string|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }
  submitProduct(data:product):void
  {
    this.product.addProduct(data).subscribe((result)=>
    {
      // console.warn(result);
      if(result)
      {
        this.productMessage='Product is successfull added!';
        this.reset();
      }
    }
    );
    setTimeout(()=> (this.productMessage = undefined ,3000));
  }


  reset()
  {
    this.name.nativeElement.value = "";
    this.price.nativeElement.value = "";
    this.color.nativeElement.value = "";
    this.category.nativeElement.value = "";
    this.description.nativeElement.value = "";
    this.image.nativeElement.value = "";
  }
}


