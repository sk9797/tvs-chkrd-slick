import { TestBed } from '@angular/core/testing';

import { ModalDataHandlerService } from './modal-data-handler.service';

describe('ModalDataHandlerService', () => {
  let service: ModalDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
