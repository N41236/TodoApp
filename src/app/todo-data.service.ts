import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoData } from './todo-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private _todoData: TodoData;

  constructor(private httpClient: HttpClient) { }

  public getTodoItems(): Observable<TodoData> {
    if (this._todoData === undefined) {
      this.httpClient.get<TodoData>('assets/data.json').subscribe(
        data => this._todoData = data
      );
      return this.httpClient.get<TodoData>('assets/data.json');
    }

    return of(this._todoData);
  }

  public removeTodoItem(deleteIndices: number[]): Observable<TodoData> {
    this._todoData.todoItems = this._todoData.todoItems.filter((listItem: string, index: number) => {
      return deleteIndices.indexOf(index) === -1;
    });

    return of(this._todoData);
  }

  public addTodoItem(item: string): Observable<TodoData> {
    this._todoData.todoItems.push(item);
    return of(this._todoData);
  }

}
