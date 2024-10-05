import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component implements OnInit {
  usernamevalue !:string;
  constructor(
    private _userservice : UsersService
  ) { }

  ngOnInit(): void {
    this._userservice.usersub$
    .subscribe(res=>{
      this.usernamevalue=res
    })
  }

}
