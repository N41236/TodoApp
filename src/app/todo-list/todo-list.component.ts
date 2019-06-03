import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatListOption } from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  items: string[]

  @Output()
  remove: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
  }

  deleteItems(options: MatListOption[]) {
    this.remove.emit(options.map(option => option.value ));
  }

}
