import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNewItemComponent } from './todo-new-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoNewItemComponent', () => {
  let component: TodoNewItemComponent;
  let fixture: ComponentFixture<TodoNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNewItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
