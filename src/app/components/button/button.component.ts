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
    addTaskMenu!.classList.add('none')
    e.preventDefault()
    console.log('clickie');
  }

}
