import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getTopHeadLines() {
    throw new Error('Method not implemented.');
  }
  key =`2932178038b240edbc5dfb420b801911`
  httpclient: any;
  http: any;
  constructor(
    private_http : HttpClient
  ) { }
  gettopheadlines(){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.key);
  }
  getNewBySource(source: string){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.key);
  }
  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.key);
  }
}
  

