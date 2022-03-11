import { TestBed } from '@angular/core/testing';

import { FaramaShareService } from './farama-share.service';

describe('FaramaShareService', () => {
  let service: FaramaShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaramaShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
