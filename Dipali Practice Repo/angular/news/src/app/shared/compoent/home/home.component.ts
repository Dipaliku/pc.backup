import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NewsService]
})
export class HomeComponent implements OnInit {
news: any;

  constructor(private newsservice : NewsService) { }

  ngOnInit(): void {
    this.newsservice.getTopHeadLines()

}
}
