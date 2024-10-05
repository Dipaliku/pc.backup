import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers :[NewsService]
})
export class PostComponent implements OnInit {
news: any;
newsSources= {sources:[]};
  filterSource='google-news';

  constructor(private newsservice : NewsService) { }

  ngOnInit(): void {
    this.newsservice.gettopheadlines()
  		.subscribe(
        (  			response: { json: () => any; }) => this.news = response.json()
    );
    this.getnewsSources();
  }
  filterNews(source: string) {
    this.news={articles:[]};
    this.newsservice.getNewBySource(source)
    .subscribe(
      (      response: { json: () => any; }) => this.news = response.json()
    );
  }
  getnewsSources() {
    this.newsservice.getSources()
      .subscribe(
        (        response: { json: () => { sources: never[]; }; }) => this.newsSources = response.json()
      );
  } 
}

