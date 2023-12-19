import { TestBed } from '@angular/core/testing';

import { NgarchService } from './ngarch.service';

describe('NgarchService', () => {
  let service: NgarchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgarchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
