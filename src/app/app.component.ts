import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private contentfulService: ContentfulService ) {}

  ngOnInit() {

  }

}
