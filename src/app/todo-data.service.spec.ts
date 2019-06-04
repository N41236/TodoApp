import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let httpTestingController: HttpTestingController;
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoDataService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(httpTestingController).toBeTruthy();
  });

  it('should be called once', () => {

    service.getTodoItems().subscribe();
    
    const req = httpTestingController.expectOne('assets/data.json');
    req.flush({ todoItems: ['learn angular', 'write tests'] });
    httpTestingController.verify();
  });
});
