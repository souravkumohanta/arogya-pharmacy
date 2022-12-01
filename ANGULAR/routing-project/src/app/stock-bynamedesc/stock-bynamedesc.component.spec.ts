import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBynamedescComponent } from './stock-bynamedesc.component';

describe('StockBynamedescComponent', () => {
  let component: StockBynamedescComponent;
  let fixture: ComponentFixture<StockBynamedescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockBynamedescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBynamedescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
