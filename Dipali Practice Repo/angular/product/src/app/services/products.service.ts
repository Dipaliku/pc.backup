import { Injectable } from '@angular/core';
import { Iproduct } from '../models/products.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : Array<Iproduct>=[
    {
      pname:"samsung m11",
      pdetails:"mobile 128gb 8gb",
      pstatus:"in progress",
      id:"1234"
      
    },
    {
      pname:"iphone 15",
      pdetails:"mobile 125gb 8gb",
      pstatus:" dispatched",
      id:"1235"
      
    },
  ]
    constructor() {}
   
  fetchallproducts():Array<Iproduct>{
    //api call to get all products;
    return this.products
  }
}
