import { TestBed } from '@angular/core/testing';

import { TyremodelService } from './tyremodel.service';

describe('TyremodelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TyremodelService = TestBed.get(TyremodelService);
    expect(service).toBeTruthy();
  });
});
