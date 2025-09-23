import { TestBed } from '@angular/core/testing';

import { LabseqFieldService } from './labseq-field-service';

describe('LabseqFieldService', () => {
  let service: LabseqFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabseqFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
