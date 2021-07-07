import { TestBed } from '@angular/core/testing';

import { FetchCartService } from './fetch-cart.service';

describe('FetchCartService', () => {
  let service: FetchCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
