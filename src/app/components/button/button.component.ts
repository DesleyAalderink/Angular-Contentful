import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  // @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  showAddTaskMenu() {
    const addTaskMenu = document.querySelector('#overlay') as HTMLElement
    addTaskMenu!.classList.toggle('none')
    console.log('Main click');
    
    document.querySelector('#overlay #addTaskMenu button')!.addEventListener('click', (e) => {
      e.preventDefault()
      addTaskMenu.classList.toggle('none')
      console.log('clickie');
      
      
    })
    
  }

}
