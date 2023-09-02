import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, SellerSignUp } from '../data-types/sellersignup';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLoginSignuptoggle=false;
  authError:string="";
  

  constructor(private seller:SellerService,private route:Router ) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  SignUp(data:SellerSignUp):void
  {
    this.seller.userSignUp(data)
  }
  login(data:login)
  {
    this.authError="";
    console.warn(data);
    this.seller.userSellerLogin(data);
    this.seller.isLoginError.subscribe((iserror)=>{
      if(iserror)
      {
       
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin()
  {  
     this.authError="";
     this.showLoginSignuptoggle=true;
  }
  openSignUp()
  {
    this.showLoginSignuptoggle=false;
  }
}
