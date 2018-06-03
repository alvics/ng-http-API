import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Create an Instance - dependency injection
  constructor(private http: HttpClient) { }

  // Create custom methods
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }
  getPosts() {
    return this.http.get('https://wordpress.com/wp-json/wp/v2/posts');
  }
}
