import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, ReplaySubject } from 'rxjs';
import { PostI } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = environment.apiUrl;
  http = inject(HttpClient);
  postItem$ = new ReplaySubject();

  constructor() { }

  getPosts():Observable<PostI[]> {

    return this.http.get<PostI[]>(this.apiUrl + '/articles')
  }


  setPostItem(){
    // localStorage.setItem()
  }
}
