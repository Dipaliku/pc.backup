import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { OfService } from 'src/app/service/of.service';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    interval$ = interval(1000);
    intervalsunscription ! : Subscription
  constructor(
    private_ofservice : OfService,
    private _postsservice : PostsService
  ) { }


  ngOnInit(): void {
//     this.intervalsunscription = this.interval$
//   .subscribe(res=>{
//     console.log(res)
//   })
// }
  


this._postsservice.fetchAllposts()
.subscribe(res => {
  console.log(res);
})
}
 

ngonDestory():void{
  // this.intervalsunscription.unsubscribe()
}
}
