import { TestBed } from '@angular/core/testing';

import { FlightsApiConService } from './flights-api-con.service';

describe('FlightsApiConService', () => {
  let service: FlightsApiConService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsApiConService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
