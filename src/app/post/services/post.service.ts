import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Post } from '../models/post.interface';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DbService } from '../../core/services/db.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlApi = environment.urlApi;
  dbObject: SQLiteObject;

  constructor(
    private http: HttpClient,
    private _dbService:DbService
  ) {
    
   }

  getAllPosts(){
    return this.http.get<Post>(`${this.urlApi}posts`);
  }

  getPost( id:number ){
    return this.http.get<Post>(`${this.urlApi}posts/${id}`);
  }

  editPost( post:Post ){
    return this.http.put<Post>(`${this.urlApi}posts/${post.id}`,post);
  }

  addPost( post:Post ){
    return this.http.post<Post>(`${this.urlApi}posts`,post);
  }

  deletePost( id:number ){
    return this.http.delete<Post>(`${this.urlApi}posts/${id}`);
  }

  async insertSQLPost(post:Post){
    let data = [post.id,post.userId,post.title,post.body,post.favorite];
    await this._dbService.dbObject.executeSql(`INSERT INTO posts (id,userId,title,body,favorite) VALUES (?,?,?,?,?)`,data);
  }

  async updateSQLPost(post:Post){
    let data = [post.userId,post.title,post.body,post.favorite];
    await this._dbService.dbObject.executeSql(`UPDATE posts SET userId = ?,title = ?,body = ?,favorite = ?  WHERE id = ${post.id}`,data);
  }

  async getfavoriteSQLPost(){
    return this._dbService.dbObject.executeSql(`SELECT * FROM posts WHERE favorite = 'true'`,[]);
  }

  async getSQLPost( id:number){
    return this._dbService.dbObject.executeSql(`SELECT * FROM posts WHERE id = ${id}`,[]);
  }

}
