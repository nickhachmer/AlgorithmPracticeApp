import { TestBed } from '@angular/core/testing';

import { AlgorithmDataService } from './algorithm-data.service';

describe('AlgorithmDataService', () => {
  let service: AlgorithmDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgorithmDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
