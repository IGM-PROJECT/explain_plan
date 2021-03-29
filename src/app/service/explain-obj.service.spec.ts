import { TestBed } from '@angular/core/testing';

import { ExplainObjService } from './explain-obj.service';

describe('ExplainObjService', () => {
  let service: ExplainObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplainObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
