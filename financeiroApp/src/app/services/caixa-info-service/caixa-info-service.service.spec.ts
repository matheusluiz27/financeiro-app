import { TestBed } from '@angular/core/testing';

import { CaixaInfoServiceService } from './caixa-info-service.service';

describe('CaixaInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaixaInfoServiceService = TestBed.get(CaixaInfoServiceService);
    expect(service).toBeTruthy();
  });
});
