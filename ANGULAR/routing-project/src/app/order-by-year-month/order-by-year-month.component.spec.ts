import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByYearMonthComponent } from './order-by-year-month.component';

describe('OrderByYearMonthComponent', () => {
  let component: OrderByYearMonthComponent;
  let fixture: ComponentFixture<OrderByYearMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByYearMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByYearMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
