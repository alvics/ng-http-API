import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // Add a property for holding the return data from API
   users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getUsers().subscribe(
       data => this.users$ = data
      );
      }
    }


