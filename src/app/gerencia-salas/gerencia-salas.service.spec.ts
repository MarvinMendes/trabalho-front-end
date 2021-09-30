import { TestBed } from '@angular/core/testing';

import { GerenciaSalasService } from './gerencia-salas.service';

describe('GerenciaSalasService', () => {
  let service: GerenciaSalasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciaSalasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
