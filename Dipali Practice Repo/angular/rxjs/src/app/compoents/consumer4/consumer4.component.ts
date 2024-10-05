import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-consumer4',
  templateUrl: './consumer4.component.html',
  styleUrls: ['./consumer4.component.scss']
})
export class Consumer4Component implements OnInit {
 usernamevalue ! :string;//undefined
  constructor(
    private _userservice : UsersService
  ) { }
  ngOnInit(): void {
    this._userservice.usersub$
    .subscribe(val=>this.usernamevalue = val)
  }

}
