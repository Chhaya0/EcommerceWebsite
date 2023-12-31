import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerupdateproductComponent } from './sellerupdateproduct/sellerupdateproduct.component';

const routes: Routes = [ //created route now bind it in template
  {
    path:'', 
    component:HomeComponent
  }, 
  { 
    path:'seller-auth',
    component:SellerAuthComponent
  },
  { 
    path:'seller-home',
  component:SellerHomeComponent,
  canActivate:[AuthGuard]
 },
 {
  path:'seller-add-product', 
  component:SellerAddProductComponent,
  canActivate:[AuthGuard]
}
,
{
  path:'seller-update-product/:id', 
  component:SellerupdateproductComponent,
  canActivate:[AuthGuard]
},
{
  path:'search/:query', 
  component:SearchComponent,
  canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
