import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBillComponent } from './store-bill.component';

describe('StoreBillComponent', () => {
  let component: StoreBillComponent;
  let fixture: ComponentFixture<StoreBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
