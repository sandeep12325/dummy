import { TestBed } from '@angular/core/testing';

import { HandlermodalService } from './handlermodal.service';

describe('HandlermodalService', () => {
  let service: HandlermodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlermodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
