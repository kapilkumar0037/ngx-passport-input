import { TestBed } from '@angular/core/testing';

import { NgxPassportInputService } from './ngx-passport-input.service';

describe('NgxPassportInputService', () => {
  let service: NgxPassportInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPassportInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
