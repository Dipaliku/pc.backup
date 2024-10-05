import { Component, OnInit } from '@angular/core';
import { OfService } from 'src/app/service/of.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
 private _ofservice : OfService
  ) { }

  ngOnInit(): void {
    this._ofservice.of$
    .subscribe(num =>{
      console.log(num);
    })
    
  
  }
  
}

