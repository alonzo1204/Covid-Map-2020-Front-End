import { TestBed } from '@angular/core/testing';

import { DataCountryService } from './dataCountry.service';

describe('DataCountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCountryService = TestBed.get(DataCountryService);
    expect(service).toBeTruthy();
  });
});
