import {TestBed} from '@angular/core/testing';

import {UniqueUsernameValidatorService} from './unique-username-validator.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UniqueUsernameValidatorService', () => {
  let service: UniqueUsernameValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UniqueUsernameValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
