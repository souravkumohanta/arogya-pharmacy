import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSortbyaddressComponent } from './customer-sortbyaddress.component';

describe('CustomerSortbyaddressComponent', () => {
  let component: CustomerSortbyaddressComponent;
  let fixture: ComponentFixture<CustomerSortbyaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSortbyaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSortbyaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
