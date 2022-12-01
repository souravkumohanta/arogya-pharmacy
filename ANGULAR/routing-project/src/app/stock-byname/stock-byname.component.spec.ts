import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBynameComponent } from './stock-byname.component';

describe('StockBynameComponent', () => {
  let component: StockBynameComponent;
  let fixture: ComponentFixture<StockBynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockBynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
