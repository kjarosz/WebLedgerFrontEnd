import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationCenterComponent } from './allocation-center.component';

describe('AllocationCenterComponent', () => {
  let component: AllocationCenterComponent;
  let fixture: ComponentFixture<AllocationCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
