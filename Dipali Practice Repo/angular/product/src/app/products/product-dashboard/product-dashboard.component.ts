import { Component, OnInit, inject } from '@angular/core';
import { Iproduct } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
    productarr !: Array<Iproduct>
    private _productsservice =inject(ProductsService);
     products!: Iproduct; 

  constructor(
  // private _productservice :ProductsService 
  ){}
  ngOnInit(): void {
    this.productarr=this._productsservice.fetchallproducts()
  }

}
