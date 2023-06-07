import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthCanActivateGuard } from './auth-can-activate.guard';

describe('authCanActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => AuthCanActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
