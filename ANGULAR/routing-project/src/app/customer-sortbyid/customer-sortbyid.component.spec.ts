import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSortbyidComponent } from './customer-sortbyid.component';

describe('CustomerSortbyidComponent', () => {
  let component: CustomerSortbyidComponent;
  let fixture: ComponentFixture<CustomerSortbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSortbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSortbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
