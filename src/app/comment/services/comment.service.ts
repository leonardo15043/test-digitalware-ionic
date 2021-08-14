import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Comment } from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getAllComments( id ){
    return this.http.get<Comment>(`${this.urlApi}posts/${id}/comments`);
  }

}
