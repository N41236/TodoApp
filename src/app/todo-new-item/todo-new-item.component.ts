import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.css']
})
export class TodoNewItemComponent implements OnInit {

  @Output()
  add: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addItem(inputVal: string) {
    if (inputVal) {
      this.add.emit(inputVal);
    }
  }
}
