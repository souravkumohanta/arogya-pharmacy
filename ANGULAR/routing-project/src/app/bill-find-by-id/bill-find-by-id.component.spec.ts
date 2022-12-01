import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFindByIdComponent } from './bill-find-by-id.component';

describe('BillFindByIdComponent', () => {
  let component: BillFindByIdComponent;
  let fixture: ComponentFixture<BillFindByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillFindByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillFindByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
