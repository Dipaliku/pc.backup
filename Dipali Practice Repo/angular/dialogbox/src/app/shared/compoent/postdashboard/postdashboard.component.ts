import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-postdashboard',
  templateUrl: './postdashboard.component.html',
  styleUrls: ['./postdashboard.component.scss']
})
export class PostdashboardComponent implements OnInit {

  constructor(
    private postservice : PostsService
  ) { }

  ngOnInit(): void {
   
      
    
  }

}
