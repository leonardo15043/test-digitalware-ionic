import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlApi = environment.urlApi;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) { }

  getAllPost(){
    return this.http.get(`${this.urlApi}posts`).pipe( map( data => data ));
  }
}
