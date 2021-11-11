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
  faTimes = faTimes;
  taskObject: any = {};
  tasks: [] = [];
  selectValue: string = '';

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    const select = document.querySelector('select') as HTMLSelectElement;
    select.addEventListener('change', () => {
      this.selectValue = select.value;
      
      if(select.value === "work") {
        console.log("i choose work");
        this.contentfulService.getContent('7p09hpE2Zqs0rdp8qGsrat')
        .then(res => {
          this.taskObject = res;
          this.tasks = this.taskObject.fields.task
          // console.log(this.tasks);

          
        })
      } 
      
      if (select.value === "sports") {
        console.log('I choose sport');
        this.contentfulService.getContent('7pB28ZeYoIPXR9J9PaeM1')
        .then(res => {
          this.taskObject = res;
          this.tasks = this.taskObject.fields.task
          
        })
      }

      if (select.value === "household") {
        console.log('I choose household');
        this.contentfulService.getContent('7bTHgEvoQ5zCfQGuFB0s4s')
        .then(res => {
          this.taskObject = res;
          this.tasks = this.taskObject.fields.task
          
        })
      }
    })
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
