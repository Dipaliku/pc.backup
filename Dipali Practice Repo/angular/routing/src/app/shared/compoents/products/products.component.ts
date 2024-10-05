import { Component, OnInit } from '@angular/core';
import { productservice } from '../../services/productservice';
import { Iproduct } from '../../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 productdata !:Array< Iproduct>
  constructor(
    private _productsService:productservice
  ) { }

  ngOnInit(): void {
    this.productdata = this._productsService.fetchAllproducts()
  }

}
