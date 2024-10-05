import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products';
import { productservice } from 'src/app/shared/services/productservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId ! :string;
  prodobj ! : Iproduct;
  constructor(
    private _routes: ActivatedRoute,
    private _productsservice:productservice
  ) { }

  ngOnInit(): void {
    
    this.productId = this._routes.snapshot.params['productId'];

    if(this.productId){
      //can find product
      this.prodobj=this._productsservice. getproductdetails(this.productId)
    }


  }

}
