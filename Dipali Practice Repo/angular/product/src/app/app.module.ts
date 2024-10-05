import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from './material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductsModule } from './products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassenegrModule } from './shared/services/passenegr/passenegr.module';
import { PassengerService } from './shared/services/passenger.service';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     MaterialModule,
     ProductsModule,
     FormsModule,
     ReactiveFormsModule,
     PassenegrModule,

    
  ],
  
  providers: [
    PassengerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
