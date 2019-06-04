import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoNewItemComponent } from './todo-new-item/todo-new-item.component';
import { By } from '@angular/platform-browser';

// Mock Classes
@Component({
  selector: 'app-todo-list',
  template: '<div></div>'
})
class MockTodoListComponent {

  @Input()
  items: string[]

  constructor() { }
}

@Component({
  selector: 'app-todo-new-item',
  template: '<div></div>'
})
class MockTodoNewItemComponent {

  constructor() { }
}

// Shallow Tests
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockTodoDataService: any;

  beforeEach(async(() => {
    mockTodoDataService = jasmine.createSpyObj(['getTodoItems']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockTodoListComponent,
        MockTodoNewItemComponent
      ],
      imports: [
      ],
      providers: [
      ],
      schemas: [
      ]
    });
    TestBed.overrideProvider(TodoDataService, { useValue: mockTodoDataService });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {  
    component = fixture.debugElement.componentInstance;    
    expect(component).toBeTruthy();
  });

  it('should load todo items', () => {
    mockTodoDataService.getTodoItems.and.returnValue(of({todoItems: ['learn rxjs', 'play tennis']}));

    fixture.detectChanges();
    
    expect(fixture.componentInstance.listItems.length).toBe(2);
  });

});

// Isolated Tests
describe('AppComponent', () => {

  let component: AppComponent;
  let mockTodoService: any;

  beforeEach(() => {
    mockTodoService = jasmine.createSpyObj(['getTodoItems']);
    component = new AppComponent(mockTodoService);
  })

  describe('on initialization', () => {

    it('loads todo items from service', () => {
      mockTodoService.getTodoItems.and.returnValue(of({todoItems: ['learn rxjs', 'play tennis']}));

      component.ngOnInit();
      
      expect(component.listItems.length).toBe(2);
      expect(component.listItems[0]).toEqual('learn rxjs');
      expect(component.listItems[1]).toEqual('play tennis');
    })
  
  })
  
});

// Deep Tests
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockTodoDataService: any;

  beforeEach(async(() => {
    mockTodoDataService = jasmine.createSpyObj(['getTodoItems']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoListComponent,
        TodoNewItemComponent
      ],
      imports: [
      ],
      providers: [
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    TestBed.overrideProvider(TodoDataService, { useValue: mockTodoDataService });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {  
    component = fixture.debugElement.componentInstance;    
    expect(component).toBeTruthy();
  });

  it('should load todo items', () => {
    mockTodoDataService.getTodoItems.and.returnValue(of({todoItems: ['learn rxjs', 'play tennis']}));

    fixture.detectChanges();
    
    const todoListComp = fixture.debugElement.query(By.directive(TodoListComponent));
    expect(todoListComp).toBeTruthy();
    expect(todoListComp.componentInstance.items.length).toBe(2);
    expect(todoListComp.componentInstance.items[0]).toBe('learn rxjs');
    expect(todoListComp.componentInstance.items[1]).toBe('play tennis');
  });

});