import { TestBed } from '@angular/core/testing';

import { LanzamientosService } from './lanzamientos.service';

describe('LanzamientosService', () => {
  let service: LanzamientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanzamientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
