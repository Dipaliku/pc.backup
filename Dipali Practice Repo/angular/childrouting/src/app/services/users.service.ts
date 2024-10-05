import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr : Array<Iuser> =[
    {
         username:'rahul',
         userId :"1",
         userrole :"admin",
         contact:"9830758976",       
    },
    {
      username:'pranshi',
      userId :"2",
      userrole :"hr",
      contact:"9423376543",       
 },
 {
  username:'sejal',
  userId :"3",
  userrole :"iT",
  contact:"9168408585",       
}
  ]

  constructor() { }

  fetchAllusers(): Array<Iuser> {
       return this.usersArr
  }
}
