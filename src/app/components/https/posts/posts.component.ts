import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // Add a property for holding the return data from API
      posts$: Object;

  // Passing in the data service 
      constructor(private data: DataService) { }

  // Getting and binding the data 
  ngOnInit() {
      this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
      console.log(this.data.getPosts()); 
   }
 }
