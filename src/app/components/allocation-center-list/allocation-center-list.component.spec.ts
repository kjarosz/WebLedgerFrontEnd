import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationCenterListComponent } from './allocation-center-list.component';

describe('AllocationCenterListComponent', () => {
  let component: AllocationCenterListComponent;
  let fixture: ComponentFixture<AllocationCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
