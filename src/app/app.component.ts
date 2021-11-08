import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // todo$?: Observable<any>

  constructor(private contentfulService: ContentfulService ) {}

  ngOnInit() {
    // this.contentful.logContent('3qSfwXAEQPhl1EDYCaIPkl')
    // this.todo$ = this.contentful.getContent('3qSfwXAEQPhl1EDYCaIPkl')
  }

}
