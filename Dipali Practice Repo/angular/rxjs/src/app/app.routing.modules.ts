import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./compoents/home/home.component";
import { UsersComponent } from "./compoents/users/users.component";
import { ProductsComponent } from "./compoents/products/products.component";

//baseurl = http://localhost:4200/
const routes : Routes =[
    {
      path :'', //http://localhost:4200/ 
      component : HomeComponent
    },
    {
        path :'users', //http://localhost:4200/users 
        component : UsersComponent
      },
      {
        path :'products', //http://localhost:4200/products 
        component : ProductsComponent
      },
  ]
  


@NgModule({
          imports :[RouterModule.forRoot(routes)],
          exports :[RouterModule] 
})
export class ApproutingModule{

}