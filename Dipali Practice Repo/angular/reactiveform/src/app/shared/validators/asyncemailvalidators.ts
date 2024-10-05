import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";



export class asyncemailvalidator{
    static isemailavalible(control:AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
        let val= control.value as string;

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              if(val==='rahul@gmail.com'){
                resolve({
                    emailexisterr:'this email id is already in use'
                })
              } else{
                resolve(null)
              }
            },2000)
            })
        }
    }
