import { TestBed } from '@angular/core/testing';

import { SurveyInfoService } from './survey-info.service';

describe('SurveyInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyInfoService = TestBed.get(SurveyInfoService);
    expect(service).toBeTruthy();
  });
});
