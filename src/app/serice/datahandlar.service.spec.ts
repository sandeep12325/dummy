import { TestBed } from '@angular/core/testing';

import { DatahandlarService } from './datahandlar.service';

describe('DatahandlarService', () => {
  let service: DatahandlarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatahandlarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
