import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { login, SellerSignUp } from '../data-types/sellersignup';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  issellerLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(data:SellerSignUp)
  {
      this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
      this.issellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home'])

    });
  }
  reloadSeller()
  {
    if(localStorage.getItem('seller'))
    {
      this.issellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userSellerLogin(data:login)
  {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length===1)
      {
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home'])
      }
      else  {
        this.isLoginError.emit(true);
      }

    });
  }
}
