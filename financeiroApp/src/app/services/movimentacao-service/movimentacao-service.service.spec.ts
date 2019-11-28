import { TestBed } from '@angular/core/testing';

import { MovimentacaoServiceService } from './movimentacao-service.service';

describe('MovimentacaoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovimentacaoServiceService = TestBed.get(MovimentacaoServiceService);
    expect(service).toBeTruthy();
  });
});
