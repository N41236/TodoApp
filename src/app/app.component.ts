import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TodoData } from './todo-data';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  public listItems: string[];
  public listItems$: Observable<AjaxResponse>;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    // this.service.getTodoItems().subscribe(
    //   (data: TodoData) => {
    //     this.listItems = data.todoItems;
    //   },
    //   (error: HttpErrorResponse)  => {
    //     console.log(error)
    //   }
    // )
    this.listItems$ = ajax("assets/data.json")
    this.listItems$.subscribe(
      ajaxResponse => {
        this.listItems = ajaxResponse.response.todoItems;
      },
      err => console.log(err),
      () => console.log('Completed!')
    )
  }

  handleRemove($event: number[]) {
    this.listItems = this.listItems.filter((listItem: string, index: number) => {
      return $event.indexOf(index) === -1;
    })
  }

  handleAdd($event: string) {
    this.listItems.push($event)
  }

}
