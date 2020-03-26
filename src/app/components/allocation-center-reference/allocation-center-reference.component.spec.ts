import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationCenterReferenceComponent } from './allocation-center-reference.component';

describe('AllocationCenterReferenceComponent', () => {
  let component: AllocationCenterReferenceComponent;
  let fixture: ComponentFixture<AllocationCenterReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationCenterReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationCenterReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
