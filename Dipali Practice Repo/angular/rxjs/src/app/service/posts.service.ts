import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
postsurl : string =`${environment.baseurl}/posts`
  constructor(
    private http : HttpClient
  ) { }

  fetchAllposts() :Observable < Iposts >{
    return this.http.get< Iposts>(this.postsurl)
  }
}
