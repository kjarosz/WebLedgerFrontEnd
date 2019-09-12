import { TestBed } from '@angular/core/testing';

import { AllocationCenterServiceService } from './allocation-center-service.service';

describe('AllocationCenterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllocationCenterServiceService = TestBed.get(AllocationCenterServiceService);
    expect(service).toBeTruthy();
  });
});
