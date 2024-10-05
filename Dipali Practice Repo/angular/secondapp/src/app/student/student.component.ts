import {Component} from "@angular/core";
import {istd} from  "../../models/student.interface";





@component({
    selector:'app-student',
    templateurl:'./student.component.html',
    styleurls:['./student.component.scss']
})
export class studentcomponent{
    stdarr: Array<istd>=[
    
        {
        
                fname : "Sachin",
                lname : "Tendulkar",
                email:"s@gmai.com",
                contact:"3265987545"
        },
            {
                
                fname : "Mahendrasingh",
                lname : "Dhoni",
                email : "M.d400@gmail.com",
                contact : "7045696321"
            },
            {
            
                fname : "Virat",
                lname : "Kohali",
                email : "k.l@gmail.com",
                contact : "9018589875"
            },
            {
                fname : "Rohit",
                lname : "Sharma",
                email:"hitman@gmail.com"
                contact : "70356531238"
            },

    ]

    


    }
   
    
