import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponettComponent } from './test-componett.component';

describe('TestComponettComponent', () => {
  let component: TestComponettComponent;
  let fixture: ComponentFixture<TestComponettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponettComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
