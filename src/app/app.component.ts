import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TodoData } from './todo-data';
import { HttpErrorResponse } from '@angular/common/http';
import { MatListOption } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  public listItems: string[];

  constructor(private _service: TodoDataService) { }

  ngOnInit() {
    this._service.getTodoItems().subscribe(
      (data: TodoData) => {
        this.listItems = data.todoItems;
      },
      (error: HttpErrorResponse)  => {
        console.log(error);
      }
    );
  }

  handleRemove(options: MatListOption[]) {
    const selected: number[] = options.map(option => option.value);
    this._service.removeTodoItem(selected).subscribe(
      data => this.listItems = data.todoItems,
      err => console.log(err)
    );
  }

  handleAdd(inputVal: string) {
    this._service.addTodoItem(inputVal).subscribe(
      data => this.listItems = data.todoItems,
      err => console.log(err)
    );
  }

}

