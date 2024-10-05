import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, productstatus } from 'src/app/models/products.interface';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
 @ViewChild ("productsform") productsform !:NgForm;
  constructor() { }
  
  ngOnInit(): void {
  }
  onproductadd(){
    if(this.productsform.valid){
      console.log(this.productsform.value);

      let newproduct:Iproduct={
        ...this.productsform.value,
        id:productstatus.inprogress,
        pstatus:productstatus.inprogress
      }
    }
  }
}
