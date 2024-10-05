import { Injectable } from "@angular/core";
import { Iproduct } from "../models/products";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class productservice{
    productsArr:Array< Iproduct>=[
        {
           pname:"samsung M31",
           pid:"123",
           pstatus:"in-progresss",
           canreturn:1 
        },
        {
            pname:"samsung TV",
           pid:"124",
           pstatus:"DISPATCHED",
           canreturn:1 
        },
        {
            pname:"iphone 14",
           pid:"125",
           pstatus:"Delivered",
           canreturn:0
        }
    ]

    constructor(
        private _router :Router
    ){}

    fetchAllproducts():Array< Iproduct>{
        //api call to get all product data
        return this.productsArr
    }


        getproductdetails(id:string):Iproduct  {
        //api call to get single user details
        return this.productsArr.find(prod=>prod.pid===id) as Iproduct
    }
    addproduct(product : Iproduct){
        this.productsArr.push(product)
        this._router.navigate(['/products'])
    }
}