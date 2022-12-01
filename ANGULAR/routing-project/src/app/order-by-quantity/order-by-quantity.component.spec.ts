import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByQuantityComponent } from './order-by-quantity.component';

describe('OrderByQuantityComponent', () => {
  let component: OrderByQuantityComponent;
  let fixture: ComponentFixture<OrderByQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
