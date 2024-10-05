import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/const/validatorspattern';
import { nospacevalidator } from './shared/validators/npspectbar';
import { empidvalidator } from './shared/validators/empvalidators';
import { state } from '@angular/animations';
import { countries_meta_data } from './shared/const/countrydata';
import { asyncemailvalidator } from './shared/validators/asyncemailvalidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reactiveform';
 public signupform !: FormGroup
 genderarr:Array<string>=["female","male","others"];
  countryarr=countries_meta_data;  
  constructor(){  
  }

 ngOnInit(): void {
      this.createsignupform()
      this. isparentandcurrentsame();
      this.patchpermentadd();
      this.confirmpasshandler();
      this.validateconfirmpass();
 }

 validateconfirmpass(){
  this.signupform.get('confirmpassword')
  ?.valueChanges.subscribe(res=>{
    console.log(res);
    if(this.f['password'].value!==res){
      this.signupform.get('confirmpassword')?.setErrors({invalid:true})
    }else{
      this.signupform.get('confirmpassword')?.setErrors(null)
    }
  })
 }
      confirmpasshandler(){
        this.signupform.get('password')
        ?.valueChanges
        .subscribe(res => {
      if(this.signupform.get('password')?.valid){
        this.signupform.get(' confirmpassword')?.enable()
      }else{
        this.signupform.get(' confirmpassword')?.disable()
      }
    })
  }

  
   patchpermentadd(){     
      this.f['isAddsame'].valueChanges
      .subscribe(res=>{
       if(res){
         this.f[' permanentAddress'].patchValue(this.f['currentAddress'].value);
         this.f[' permanentAddress'].disable()
       }else{
         this.f[' permanentAddress'].reset();
         this.f[' permanentAddress'].enable();
       }
      })
    }    
     
 
 
     
 
      
       
  createsignupform(){
  this.signupform = new FormGroup({
    username: new FormControl(null, [Validators.required,Validators.minLength(5),Validators.maxLength(12),Validators.pattern(CustomRegex.username)]),
    email :new FormControl(null,
      [Validators.required,Validators.pattern(CustomRegex.email)],
      [asyncemailvalidator.isemailavalible]),
      
     empid : new FormControl(null,
      [Validators.required,empidvalidator.isempidvalid]),
     gender: new FormControl('female',[Validators.required]),
     currentAddress:new FormGroup({
      country :new FormControl(null,[Validators.required]),
      state :new FormControl(null,[Validators.required]),
      city :new FormControl(null,[Validators.required]),
      zipcode :new FormControl(null,[Validators.required])
     }),
     permanentAddress :new FormGroup({
      country :new FormControl(null,[Validators.required]),
      state :new FormControl(null,[Validators.required]),
      city :new FormControl(null,[Validators.required]),
      zipcode :new FormControl(null,[Validators.required])
     }),
     skills: new FormArray([new FormControl(null,[Validators.required])]),
     isAddsame : new FormControl({value:false,disabled:true}),
     password: new FormControl(null,[Validators.required, Validators.pattern(CustomRegex.password)]),
     confirmpassword:new FormControl({value:null,disabled:true},[Validators.required])
  })
   
 }
    isparentandcurrentsame(){
      this.signupform.get('currentAddress')
      ?.valueChanges
      .subscribe(res=>{
        if(this.signupform.get('currentAddress')?.valid){
          this.f['isAddsame'].enable();
        }else{
          this.f['isAddsame'].disable();
          this.f['isAddsame'].patchValue(false)
        }
        })
    }
    onsignup(){
       if(this.signupform.valid){
      console.log(this.signupform);
      // console.log{....this.signupform.value,permanentaddress:this.signupform.get('permanentaddresss)?.value})
      console.log(this.signupform.getRawValue());

       }
   }

   get f(){
       return this.signupform.controls
   }
  get getusername(){
    return this.signupform.get('username')as FormControl 
   }
   get skillsformarr(){
   return this.signupform.get('skills') as FormArray
    } 
    onskillAdd(){
      if (this.skillsformarr.length<5){
      let getskillcontrol=new FormControl(null,[Validators.required]);
      this.skillsformarr.push(getskillcontrol)
      }
    } 
    onskillRemove(i:number){
      this.skillsformarr.removeAt(i)
    }
  }
