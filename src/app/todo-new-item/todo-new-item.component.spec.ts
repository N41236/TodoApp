import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNewItemComponent } from './todo-new-item.component';

describe('TodoNewItemComponent', () => {
  let component: TodoNewItemComponent;
  let fixture: ComponentFixture<TodoNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNewItemComponent ]
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
