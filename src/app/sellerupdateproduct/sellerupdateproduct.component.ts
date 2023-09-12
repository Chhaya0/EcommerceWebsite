import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../data-types/sellersignup';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sellerupdateproduct',
  templateUrl: './sellerupdateproduct.component.html',
  styleUrls: ['./sellerupdateproduct.component.css']
})
export class SellerupdateproductComponent implements OnInit {
  productMessage:undefined |string;
  productData:undefined | product;
  constructor( private route:ActivatedRoute, private product:ProductService, private router:Router) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    //here productid and this.product.getproduct this line means if we have product id and it is not null
    //then only will get data else no data. 
    productId && this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.productData=data;
    })
  }

  submitUpdateProduct(data:product)
  {
    console.warn(data);
    if(this.productData)
    {
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result)=>
    {
      console.warn(result);
      if(result)
      {
        this.productMessage='Product is updated successfully ';
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined
    },3000)
    this.router.navigate(['seller-home']);
  }
}
