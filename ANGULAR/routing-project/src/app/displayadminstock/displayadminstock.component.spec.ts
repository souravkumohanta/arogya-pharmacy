import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayadminstockComponent } from './displayadminstock.component';

describe('DisplayadminstockComponent', () => {
  let component: DisplayadminstockComponent;
  let fixture: ComponentFixture<DisplayadminstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayadminstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayadminstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
