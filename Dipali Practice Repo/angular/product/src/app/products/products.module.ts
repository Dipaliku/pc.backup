import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductsCardComponent,
    ProductsFormComponent,
    
  ],
    
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports :[
    ProductDashboardComponent,
    FormsModule,
  ],
  providers :[

  ]


  
})
export class ProductsModule { }
