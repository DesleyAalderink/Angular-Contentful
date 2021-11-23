import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';
import { IAppContainer } from 'src/app/Models/IAppContainer';
import { ContainerComponent } from '../container/container.component';
// import { Entry } from 'contentful';
// import { title } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  globalAppContainer: IAppContainer = {};

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    // console.log(this.contentfulService.getContent());

    this.contentfulService.getContent('7EV11i1fa3Ox2yXapGfIIR')
      .then(res => {
        this.globalAppContainer = res as IAppContainer;
        this.globalAppContainer.fields.title = this.globalAppContainer.fields.title.replace(`{{totalTasks}}`, `${this.globalAppContainer.fields.task.length}`)

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
