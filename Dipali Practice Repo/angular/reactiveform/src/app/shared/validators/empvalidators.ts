import { AbstractControl, ValidationErrors } from "@angular/forms";


export class empidvalidator{
    static isempidvalid(control:AbstractControl):ValidationErrors|null{
        let val=control.value as string;

    if(val) {
        ///
        let regexp=/^[A-Za]\d{3}$/;

         let isvalid=regexp.test(val)  // test return boolean

         if(isvalid){
            return null
         }else{
            return{
                invalidempid:`emp id should starts with 1 captial alphabet and end with 3 number`
            }
         }
    }else{
        return null
    }
}
}