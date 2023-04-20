import { TestBed } from '@angular/core/testing';

import { DatagridserviceService } from './datagridservice.service';

describe('DatagridserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatagridserviceService = TestBed.get(DatagridserviceService);
    expect(service).toBeTruthy();
  });
});
