import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { product } from '../data-types/sellersignup';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string='default';
  sellerName:string='';
  searchResult:undefined|product[];

  constructor(private router:Router,private product:ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=> {
      if(val.url)
      {
        if(localStorage.getItem('seller')&&val.url.includes('seller'))
        {
          this.menuType='seller';
          if(localStorage.getItem('seller'))
          {
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
          }
        }
        else
        {
          this.menuType='default';
        }
      }
    })

    
  }



  logout()
  {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  searchProduct(query:KeyboardEvent)
  {
    if(query)
    {
      const element=query.target as HTMLInputElement;
      console.warn(element);
      this.product.searchProducts(element.value).subscribe((result)=>{
        console.warn(result)
        this.searchResult=result;
      })
    }
  }
  hideSearch()
  {
    this.searchResult=undefined;
  }
  submitSearch(value:string)
  {
    console.log(value);
    this.router.navigate([`search/${value}`])
  }
}
