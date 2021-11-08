import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable, from } from 'rxjs';
import { environment } from '../environments/environment';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

    //Logs all entry's for debugging
  // logContent(contentId: string) {
  //   this.client.getEntry(contentId)
  //   .then( (entry) => console.log(entry)
  //    );

  //   getContent(key?: string, query?: object): Promise<Entry<any>[]> {
  //     return this.cdaClient.getEntries(Object.assign({
  //       content_type: key
  //     }, query))
  //     .then(res => res.items)
  //   }
  // }

  getContent(key?: string) {
    return  this.cdaClient.getEntry(key!)
  }



  //Retreive content mapped to its data fields
  // getContent(contentId: string) {
  //   const promise = this.client.getEntry(contentId)
  //   return from(promise).pipe(map(entry => entry.fields))
  // }

}
