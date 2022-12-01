import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterProceedToPayComponent } from './after-proceed-to-pay.component';

describe('AfterProceedToPayComponent', () => {
  let component: AfterProceedToPayComponent;
  let fixture: ComponentFixture<AfterProceedToPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterProceedToPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterProceedToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
