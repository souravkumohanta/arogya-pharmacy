import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallySupplierComponent } from './tally-supplier.component';

describe('TallySupplierComponent', () => {
  let component: TallySupplierComponent;
  let fixture: ComponentFixture<TallySupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallySupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TallySupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
