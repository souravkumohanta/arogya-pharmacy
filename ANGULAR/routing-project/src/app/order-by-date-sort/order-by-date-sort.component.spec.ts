import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByDateSortComponent } from './order-by-date-sort.component';

describe('OrderByDateSortComponent', () => {
  let component: OrderByDateSortComponent;
  let fixture: ComponentFixture<OrderByDateSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByDateSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByDateSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
