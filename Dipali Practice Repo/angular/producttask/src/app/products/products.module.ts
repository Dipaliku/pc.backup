import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { ProductsFormComponent } from './products-form/products-form.component';



@NgModule({
  declarations: [
    ProductsDashboardComponent,
    ProductsCardComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
