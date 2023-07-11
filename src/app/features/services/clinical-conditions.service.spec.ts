import { TestBed } from '@angular/core/testing';

import { ClinicalConditionsService } from './clinical-conditions.service';

describe('ClinicalConditionsService', () => {
  let service: ClinicalConditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicalConditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
