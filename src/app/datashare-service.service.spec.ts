import { TestBed } from '@angular/core/testing';

import { DatashareServiceService } from './datashare-service.service';

describe('DatashareServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatashareServiceService = TestBed.get(DatashareServiceService);
    expect(service).toBeTruthy();
  });
});
