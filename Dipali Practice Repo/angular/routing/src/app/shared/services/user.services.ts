import { Injectable } from "@angular/core";
import { Iuser } from "../models/users";

@Injectable({
    providedIn:'root'
})

export class usersservices{
    usersArr=[
        {
            username:'rahul',
            usersid:'123',
            userRole:'admin'
        },
        {
            username:'sohan',
            usersid:'124',
            userRole:'buyer'
        },
        {
            username:'sonali',
            usersid:'125',
            userRole:'admin'
        }
    ]

    constructor() {}

    fetchallusers():Array<Iuser>{
        //api call to get users data
        return this. usersArr;
    }
    getuserinfo(id:string) :Iuser | undefined{
        //api call to get user info from db
        return this. usersArr.find(user=>user.usersid===id)
    }
}

     