import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoents/home/home.component';
import { UsersComponent } from './compoents/users/users.component';
import { ProductsComponent } from './compoents/products/products.component';
import { NoPageFoundComponent } from './compoents/no-page-found/no-page-found.component';
import { UserComponent } from './compoents/user/user.component';
import { UserFormComponent } from './compoents/user-form/user-form.component';
import { ProductFormComponent } from './compoents/product-form/product-form.component';
import { ProductComponent } from './compoents/product/product.component';


//baseurl http://localhost:4200
const routes: Routes = [
  {
    path:'',//  http://localhost:4200/home
    component: HomeComponent
  }, 
    {
      path:'users',//  http://localhost:4200/users
      component: UsersComponent
    },
    {
      path:'users/adduser',//  http://localhost:4200/users/123/edit
      component: UserFormComponent
    },
    {
      path:'users/:userId',//  http://localhost:4200/users/123
      component: UserComponent
    },
    {
      path:'users/:userId/edit',//  http://localhost:4200/users/123/edit
      component: UserFormComponent
    },
    {
      path:'products',//  http://localhost:4200/products
      component: ProductsComponent
    },
    {
      path:'products/addproduct',//  http://localhost:4200/products/addproduct
      component: ProductFormComponent
    },
    {
      path:'products/:/productid',//  http://localhost:4200/products/addproduct
      component: ProductComponent
    },
    {
      path:'products/:/productid/edit',//  http://localhost:4200/products/addproduct
      component: ProductFormComponent
    },


  // {
  //   path:'no-page-found',//  http://localhost:4200
  //   component: NoPageFoundComponent
  // },
  
  // {
  //   path:'**',//  http://localhost:4200
  //   redirectTo: 'no-page-found'
  // },
  
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
