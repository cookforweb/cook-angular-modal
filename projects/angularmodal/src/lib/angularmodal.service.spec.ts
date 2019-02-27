import { TestBed } from '@angular/core/testing';

import { AngularmodalService } from './angularmodal.service';

describe('AngularmodalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularmodalService = TestBed.get(AngularmodalService);
    expect(service).toBeTruthy();
  });
});
