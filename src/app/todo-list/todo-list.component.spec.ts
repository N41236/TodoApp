import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render todo items correctly', () => {
    component.items = ['learn angular', 'write tests'];

    fixture.detectChanges();
    
    // With debug
    expect(fixture.debugElement.queryAll(By.css('mat-list-option')).length).toEqual(2);

    // With native
    let matListOptionElement = fixture.nativeElement.querySelectorAll("mat-list-option");
    expect(matListOptionElement.length).toEqual(2);
    matListOptionElement.forEach((element, index) => {
      expect(element.textContent).toContain(component.items[index]);
    });

  })
});
