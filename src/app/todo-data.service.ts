import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoData } from './todo-data';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService { 

  constructor(private httpClient: HttpClient) { }

  getTodoItems() {
    return this.httpClient.get<TodoData>("assets/data.json");
  }
}
