import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';
import { IAppState } from 'src/app/Models/IAppState';
import { ContainerComponent } from '../container/container.component';
import { Entry } from 'contentful';
// import { title } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appstate: IAppState = {};
  totalTasks: any = `Can't determine how many tasks...`;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    // console.log(this.contentfulService.getContent());

    this.contentfulService.getContent('7EV11i1fa3Ox2yXapGfIIR')
      .then(res => {
        this.appstate = res;
        this.appstate.fields.title = this.appstate.fields.title.replace(`{{totalTasks}}`, `${this.appstate.fields.task.length}`)
        console.log(this.appstate);

      })
    //   this.todos = res.map(result => ({

    //     totalTasks: result.fields.task.length,
    //     title: result.fields.title

    //   }))

    //   console.log(this.todos);

    //   this.totalTasks = this.todos[0].totalTasks
    //   this.title = this.todos[0].title!.replace(`{{totalTasks}}`, `${this.totalTasks}`)

    // })
  }

  toggleAddTask() {
    console.log('toggle');

  }

}
