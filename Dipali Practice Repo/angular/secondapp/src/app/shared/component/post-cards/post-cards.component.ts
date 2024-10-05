import { Component, OnInit } from '@angular/core';
import { posts } from '../../constant/posts';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {
  postdata= Array <ipost>=posts;


  constructor() { }

  ngOnInit(): void {
  }

}
