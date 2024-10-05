import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { ActivatedRoute } from '@angular/router';
import { usersservices } from '../../services/user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usersid !:string;
  usersobj !:Iuser | undefined;
usersdata: any;
  constructor(
    private _routes :ActivatedRoute,
    private _userservice:usersservices
  ) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe(res=>{
      console.log(res);
      this.usersid =res['userid']
      this.usersobj=this._userservice.getuserinfo(this.usersid)
    })
    // this.usersid = this ._routes.snapshot.params['usersid'];
    // console.log('this.usersid')
    // if(this.usersid){
    //   this.usersobj=this._userservice.getuserinfo(this.usersid)
    // }
  }

}
