import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
@ViewChild('username') username !: ElementRef<any>;
  constructor(
    private _userservice : UsersService
  
  ) { }
  ngOnInit(): void {
  }
  getusername(){
    let val = this.username.nativeElement.value as string;
    console.log(val);
    this.username.nativeElement.value=''
    this._userservice.usersub$.next(val);
  }
}
