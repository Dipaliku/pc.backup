import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/compoents/home/home.component';
import { UsersComponent } from './shared/compoents/users/users.component';
import { ProductsComponent } from './shared/compoents/products/products.component';
import { NopagefoundComponent } from './shared/compoents/nopagefound/nopagefound.component';
import { UserFormComponent } from './shared/compoents/users/user-form/user-form.component';
import { ProductFormComponent } from './shared/compoents/products/product-form/product-form.component';

//basrurl http://localhost:4200
const routes: Routes = [
  {
    path:'**',
    redirectTo:'no-page-found'
  },
  {
    path:'',//http://localhost:4200
    component:HomeComponent
  },
  {
    path:'home',//http://localhost:4200/home
    component:HomeComponent  
  },
  {
    path:'users',//http://localhost:4200/users
    component:UsersComponent
  },
     {  
    path:'users/:usersid',//http://localhost:4200/users/123
    component:UsersComponent ///http://localhost:4200/users/adduser
  },
  {  
    path:'users/:usersid/edituser',//http://localhost:4200/users/123/edituser
    component:UserFormComponent
  },
  {  
    path:'users/adduser',//http://localhost:4200/users/123/edituser
    component:UserFormComponent
  },
  {
    path:'products',//http://localhost:4200/products
    component:ProductsComponent
  },
  // {
  //   path:'page-not-found',
  //   component:NopagefoundComponent
  // },
  // {
  //   path:'**',  //wildcard routing
  //   redirectTo:'page-not-found'
  // },
  {
    path:'products/addproduct',//http://localhost:4200/products/addproducts
    component:ProductFormComponent
  },
  {
    path:'products/:productId',//http://localhost:4200/products/addproducts
    component:ProductFormComponent
  },
  {
    path:'products/:productId/editproduct',//http://localhost:4200/products/addproducts
    component:ProductFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
