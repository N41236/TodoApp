import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TodoData } from './todo-data';
import { HttpErrorResponse } from '@angular/common/http';
import { MatListOption } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit, OnDestroy {

  public listItems: string[];
  private _getTodoSubscription: Subscription;
  private _addTodoSubscription: Subscription;
  private _removeTodoSubscription: Subscription;

  constructor(private _service: TodoDataService) { }

  ngOnInit(): void {
    this._getTodoSubscription = this._service.getTodoItems().subscribe(
      (data: TodoData) => {
        this.listItems = data.todoItems;
      },
      (error: HttpErrorResponse)  => {
        console.log(error);
      }
    );
  }

  public handleRemove(options: MatListOption[]): void {
    const selected: number[] = options.map(option => option.value);
    this._removeTodoSubscription = this._service.removeTodoItem(selected).subscribe(
      data => this.listItems = data.todoItems,
      err => console.log(err)
    );
  }

  public handleAdd(inputVal: string): void {
    this._addTodoSubscription = this._service.addTodoItem(inputVal).subscribe(
      data => this.listItems = data.todoItems,
      err => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this._addTodoSubscription.unsubscribe();
    this._removeTodoSubscription.unsubscribe();
    this._getTodoSubscription.unsubscribe();
  }
}

