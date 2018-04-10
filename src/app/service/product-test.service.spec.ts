import { TestBed, inject } from '@angular/core/testing';

import { ProductTestService } from './product-test.service';

describe('ProductTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductTestService]
    });
  });

  it('should be created', inject([ProductTestService], (service: ProductTestService) => {
    expect(service).toBeTruthy();
  }));
});
