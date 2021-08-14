import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getUser( id:number ){
     return this.http.get<User>(`${this.urlApi}users/${id}`);
  }

}
