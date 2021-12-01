import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ContentfulService } from 'src/app/contentful.service';
import { IAppContainer } from '../../Models/IAppContainer';
import { ITask } from 'src/app/Models/ITask';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class Tasks implements OnInit {
  faTimes = faTimes;
  taskObject: any = {};
  localTasks: any = [];
  tasks: any = [];
  selectValue: string = '';

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    const select = document.querySelector('#task select') as HTMLSelectElement;
    select.addEventListener('change', () => {
      this.selectValue = select.value;
      
      if(select.value === "work") {
        console.log("i choose work");
        this.contentfulService.getContent('7p09hpE2Zqs0rdp8qGsrat')
        .then(res => {
          this.taskObject = res;
          this.tasks = this.taskObject.fields.task;
          console.log(this.taskObject);
          
          
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

    if(localStorage.getItem('tasks')) {
      console.log('ik heb tasks');
      const localTasks = JSON.parse(localStorage.getItem('tasks') || '{}');

      // for (const [key, value] of Object.entries(localTasks)) {
      //   console.log(key);
      //   console.log(value);
        
        
      // }

      localTasks.forEach((task: any) => {
        const localDiv = document.createElement('div')
        const localDivH4 = document.createElement('h4')
        const localDivP = document.createElement('p')

        localDiv.appendChild(localDivH4)
        localDiv.appendChild(localDivP)

        document.querySelector('#localTask')?.appendChild(localDiv)

        console.log(`${task.taskType}` + `${task.taskValue}`);

        if(task.taskType === 'work') {
          localDivH4.innerHTML = task.taskType
          localDivP.innerHTML = task.taskValue
        }

        if(task.taskType === 'sport') {
          localDivH4.innerHTML = task.taskType
          localDivP.innerHTML = task.taskValue
        }
        


        console.log(task);

        // for (const [key, value] of Object.entries(task)) {
        //   console.log(`${key}: ${value}`);
          
        // }
        
        // const localDiv = document.createElement('div')
        
        // document.querySelector('#localTask')?.appendChild(localDiv)
      });
      // console.log(localTasks);
      
    }

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
