import { TestBed } from '@angular/core/testing';

import { FuncService } from './func.service';

describe('FuncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncService = TestBed.get(FuncService);
    expect(service).toBeTruthy();
  });
});
