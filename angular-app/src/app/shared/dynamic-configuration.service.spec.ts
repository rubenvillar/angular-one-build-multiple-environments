import { TestBed } from '@angular/core/testing';

import { DynamicConfigurationService } from './dynamic-configuration.service';

describe('DynamicConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicConfigurationService = TestBed.get(DynamicConfigurationService);
    expect(service).toBeTruthy();
  });
});
