import { TestBed } from '@angular/core/testing';

import { FaramaUIShareService } from './farama-ui-share.service';

describe('FaramaUIShareService', () => {
  let service: FaramaUIShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaramaUIShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
