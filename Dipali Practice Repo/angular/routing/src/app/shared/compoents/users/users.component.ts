import { Component, OnInit } from '@angular/core';
import { usersservices } from '../../services/user.services';
import { Iuser } from '../../models/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
 usersData !:Array<Iuser>
 usersid !:string;
users: any;
  constructor(
    private _usersService : usersservices,
    private _routes :ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usersData = this._usersService.fetchallusers();
    console.log(this._routes.snapshot);

    
  }

}

