import { CanActivateFn } from '@angular/router';

export const AuthCanActivateGuard: CanActivateFn = (route, state) => {
  return true;
};
