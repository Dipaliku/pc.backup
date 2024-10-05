import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './compoents/home/home.component';
import { UsersComponent } from './compoents/users/users.component';
import { ProductsComponent } from './compoents/products/products.component';
import { NavbarComponent } from './compoents/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { NoPageFoundComponent } from './compoents/no-page-found/no-page-found.component';
import { UserFormComponent } from './compoents/user-form/user-form.component';
import { UserComponent } from './compoents/user/user.component';
import {MatTableModule} from '@angular/material/table';
import { ProductComponent } from './compoents/product/product.component';
import { ProductFormComponent } from './compoents/product-form/product-form.component';
import { FairsComponent } from './compoents/fairs/fairs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    NoPageFoundComponent,
    UserFormComponent,
    UserComponent,
    ProductComponent,
    ProductFormComponent,
    FairsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
