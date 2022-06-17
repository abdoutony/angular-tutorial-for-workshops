import { Injectable } from '@angular/core';
import { Post } from '../../representations/post';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
