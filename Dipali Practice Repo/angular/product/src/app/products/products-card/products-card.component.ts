import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/products.interface';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
@Input() prodobj !:Iproduct
  constructor() { }

  ngOnInit(): void {
  }

}
