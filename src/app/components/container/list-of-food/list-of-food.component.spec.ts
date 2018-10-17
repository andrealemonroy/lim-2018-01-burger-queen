import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFoodComponent } from './list-of-food.component';

describe('ListOfFoodComponent', () => {
  let component: ListOfFoodComponent;
  let fixture: ComponentFixture<ListOfFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
