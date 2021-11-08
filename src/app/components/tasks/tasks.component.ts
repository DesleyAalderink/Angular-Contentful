import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ContentfulService } from 'src/app/contentful.service';
import { IAppContainer } from '../../Models/IAppContainer';
import { ITask } from 'src/app/Models/ITask';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class Tasks implements OnInit {
  // @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  task: ITask[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    // this.contentfulService.getContent('tasks')
    // .then(res => {
    //   this.tasks = res.map(result => ({
    //     tasks: result.fields.tasks
    //   }))
    // })
  }

  OnDelete(task: Task) {
    // this.OnDeleteTask.emit(task);
    // console.log(`OnDelete fires on ${this.task.id}`);

  }

}
