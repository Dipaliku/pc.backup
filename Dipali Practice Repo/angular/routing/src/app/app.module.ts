import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/compoents/home/home.component';
import { UsersComponent } from './shared/compoents/users/users.component';
import { ProductsComponent } from './shared/compoents/products/products.component';
import { NavbarComponent } from './shared/compoents/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { NopagefoundComponent } from './shared/compoents/nopagefound/nopagefound.component';
import { UserFormComponent } from './shared/compoents/users/user-form/user-form.component';
import { ProductComponent } from './shared/compoents/products/product/product.component';
import { ProductFormComponent } from './shared/compoents/products/product-form/product-form.component';
import { UserComponent } from './shared/compoents/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    NopagefoundComponent,
    UserFormComponent,
    ProductComponent,
    ProductFormComponent,
    UserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
