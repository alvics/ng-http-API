import { DataService } from './../../../data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  // define the property
      user$: Object;
    
  // Pass in the data service & create an instance of the route
  constructor(private route: ActivatedRoute, private data: DataService) {

  // Getting the url of ('details/:id') from the routing-module 
     this.route.params.subscribe( params => this.user$ = params.id);
    }
  // getting and binding the data
  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    );
  }
 }
