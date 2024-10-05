import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 productid ! : string;
 productobj ! : Iproduct;
  constructor(
    private _routes : ActivatedRoute,
    private _productservice: ProductsService
  ) { }

  ngOnInit(): void {
    
    this.productid= this._routes.snapshot.params['productid'];

    if(this.productid){
      this.productobj=this._productservice.getproductdetails(this.productid)

  }
  }
}

