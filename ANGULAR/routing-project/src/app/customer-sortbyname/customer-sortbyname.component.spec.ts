import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSortbynameComponent } from './customer-sortbyname.component';

describe('CustomerSortbynameComponent', () => {
  let component: CustomerSortbynameComponent;
  let fixture: ComponentFixture<CustomerSortbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSortbynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSortbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
