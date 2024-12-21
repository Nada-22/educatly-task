import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { PostI } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = environment.apiUrl;
  http = inject(HttpClient);

  constructor() { }

  getPosts():Observable<PostI[]> {

    return this.http.get<PostI[]>(this.apiUrl + '/articles')
  }
}
