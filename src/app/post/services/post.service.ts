import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(){
    return this.http.get<Post>(`${this.urlApi}posts`);
  }

  getPost( id:number ){
    return this.http.get<Post>(`${this.urlApi}posts/${id}`);
  }

}
