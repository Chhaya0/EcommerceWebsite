import { Component, OnInit } from '@angular/core';
import { product } from '../data-types/sellersignup';
import { ProductService } from '../services/product.service';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[];
  // icon=faTrash;
  deleteMessage='';
  constructor(private product:ProductService) { }

  ngOnInit(): void {
   this.productListFun();
  }
  deleteProduct(id:number)
  {
    this.product.deleteProduct(id).subscribe((result)=>
    {
      if(result)
      {
        this.deleteMessage='Product deleted successfully';
        this.productListFun();// after deleting page refresh or list refresh
      }
    })
    setTimeout(() => {
      this.deleteMessage=''
    },3000)
  }

  productListFun()
  {
    this.product.productRetrieve().subscribe((result)=>{
      console.warn(result);
      if(result)
      {
        this.productList=result;
      }
    });
  }

}
