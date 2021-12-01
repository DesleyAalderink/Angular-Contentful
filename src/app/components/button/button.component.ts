import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {

  }

  showAddTaskMenu() {
    const addTaskMenu = document.querySelector('#overlay') as HTMLElement
    addTaskMenu!.classList.remove('none')
    console.log('Main click');
  }

  hideAddTaskMenu(e: Event) {
    const addTaskMenu = document.querySelector('#overlay') as HTMLElement
    const task = document.querySelector('#overlay select') as HTMLSelectElement
    const taskValue = document.querySelector('#overlay input') as HTMLInputElement

    let savedLocalTasks = [];

    const localTaskObj = {taskType: task.value, taskValue: taskValue.value}
    savedLocalTasks.push(localTaskObj)

    this.saveToLocal(localTaskObj)

    console.log(savedLocalTasks);
    taskValue.value = '';
    
    // localStorage.clear()


    // localStorage.setItem('LocalTasks', taskValue.value)
    addTaskMenu!.classList.add('none')
    e.preventDefault()
    console.log('clickie');
  }

  saveToLocal(localTaskObj: Object) {
    let localTasks;
    if(localStorage.getItem('tasks') === null) {
      localTasks = []
    } else {
      localTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    }
    localTasks.push(localTaskObj)
    localStorage.setItem('tasks', JSON.stringify(localTasks))
  }

}
