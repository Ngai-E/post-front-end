import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { dashboardCanLoadGuard } from './dashboard.can-load.guard';

describe('dashboardCanLoadGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dashboardCanLoadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
