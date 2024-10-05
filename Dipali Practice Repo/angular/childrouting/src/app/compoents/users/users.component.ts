import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersdata ! : Array<Iuser>;
  userId ! : string;
  constructor(
    private _usersservice : UsersService,
    
  ) { }

  ngOnInit(): void {
    this.usersdata = this._usersservice.fetchAllusers();
    
  }

}
