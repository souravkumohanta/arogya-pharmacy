import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySupplierComponent } from './display-supplier.component';

describe('DisplaySupplierComponent', () => {
  let component: DisplaySupplierComponent;
  let fixture: ComponentFixture<DisplaySupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
