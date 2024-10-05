import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './compoents/navbar/navbar.component';
import { OneComponent } from './compoents/one/one.component';
import { TwoComponent } from './compoents/two/two.component';
import { UsersComponent } from './compoents/users/users.component';
import { ProductsComponent } from './compoents/products/products.component';
import { HomeComponent } from './compoents/home/home.component';
import { ApproutingModule } from './app.routing.modules';
import { Consumer1Component } from './compoents/consumer1/consumer1.component';
import { Consumer2Component } from './compoents/consumer2/consumer2.component';
import { Consumer3Component } from './compoents/consumer3/consumer3.component';
import { Consumer4Component } from './compoents/consumer4/consumer4.component';
import { UserFormComponent } from './compoents/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './compoents/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OneComponent,
    TwoComponent,
    UsersComponent,
    ProductsComponent,
    HomeComponent,
    Consumer1Component,
    Consumer2Component,
    Consumer3Component,
    Consumer4Component,
    UserFormComponent,
    CardComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
