import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 productsdata !: Array<Iproduct>
  constructor(
    private _productsservice :ProductsService
  ) { }

  ngOnInit(): void {
     
  }

}
