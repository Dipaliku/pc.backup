import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-consumer3',
  templateUrl: './consumer3.component.html',
  styleUrls: ['./consumer3.component.scss']
})
export class Consumer3Component implements OnInit {
  usernamevalue !:string;
  constructor(
    private _userservice : UsersService
  ) { }

  ngOnInit(): void {
    this._userservice.usersub$
      .subscribe(res=> {
        this.usernamevalue = res
      })
  }

}
