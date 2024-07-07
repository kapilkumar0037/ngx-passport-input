import { TestBed } from '@angular/core/testing';

import { PassportValidatorHelperService } from './passport-validator-helper.service';

describe('PassportValidatorHelperService', () => {
  let service: PassportValidatorHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassportValidatorHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
