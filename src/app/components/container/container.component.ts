import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../../services/task.service'
// import { Task } from '../../Task';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';
import { IAppState } from '../../Models/IAppState';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

let options = {
  renderNode: {
    'embedded-asset-block': (node: any) =>
      `<img class="img-fluid" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.description}"/>`
  }
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {
  todos: IAppState[] = [];
  richText: string = '';
  totalTasks: any = '';

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    // this.contentfulService.getContent('globalAppComponent')
    // .then(res => {
    //   this.todos = res.map(result => ({
    //     thumb: result.fields.thumbnail.fields,
    //     date: result.fields.date,
    //     location: result.fields,
    //     article: result.fields.article,
    //     totalTasks: result.fields.task.length,
    //   } as IAppState))
    //   const rawRichTextField = this.todos[0].article

    //   return documentToHtmlString(rawRichTextField, options)


    // }).then(renderedHtml => {
    //   this.totalTasks = this.todos[0].totalTasks

    //   if(this.totalTasks === 0) {
    //     this.richText = renderedHtml.replace(`[geen]`, `geen`).replace(`{{totalTasks}}`, ``).replace(`[&#39;s]`, `'s`)
    //   } else if (this.totalTasks === 1) {
    //     this.richText = renderedHtml.replace(`{{totalTasks}}`, `${this.totalTasks}`).replace(`[geen]`, ``).replace(`[&#39;s]`, ``)
    //   } else if (this.totalTasks > 1) {
    //     this.richText = renderedHtml.replace(`{{totalTasks}}`, `${this.totalTasks}`).replace(`[geen]`, ``).replace(`[&#39;s]`, `'s`)
    //   }
    // })

  }


  deleteTask(task: Task) {
  }

}
