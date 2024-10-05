import { Injectable } from '@angular/core';
import { Iproduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productarr :Array<Iproduct>=[
    {
      pname:"apple",
      pid:"123",
      pstatus:"in-progress",
      canreturn :1
    },
    {
      pname:"samsung",
      pid:"124",
      pstatus:"dispatched",
      canreturn :1
    },
    {
      pname:"oneplus",
      pid:"125",
      pstatus:"delivered",
      canreturn :0
    }
  ]

  constructor() { }
  fetchAllproducts(): Array<Iproduct>{ 
    return this.productarr

  }
     getproductdetails(id:string){
      return this.productarr.find(prod=>prod.pid===id) as Iproduct
     }
  }

