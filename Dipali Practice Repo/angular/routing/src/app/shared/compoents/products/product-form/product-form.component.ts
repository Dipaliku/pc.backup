import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products';
import { productservice } from 'src/app/shared/services/productservice';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  prodform !: FormGroup;
  isineditmode : boolean =false;
  productid ! : string; //undefinded
  _uuidservice: any;

  constructor(
     private _productservice :productservice,
     private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createprodform();
    this .productid = this._routes.snapshot.params['prpductid']
    if(this.productid){
      this.isineditmode = true;
    }else{
      this.isineditmode =false;
    }
  }
    createprodform(){
    this.prodform =new FormGroup({
      pname : new FormControl(null,[Validators.required]),
      pstatus : new FormControl(null,[Validators.required]),
      canreturn : new FormControl(null,[Validators.required])
    })
  }
  onprodAdd(){
      if(this.prodform.valid){
        let newprod : Iproduct={... this.prodform.getRawValue(),pid:this._uuidservice.uuid(),canreturn :0};
        console.log(newprod);
        this._productservice.addproduct(newprod)
      }
    }
}
