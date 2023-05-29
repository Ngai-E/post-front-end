import { CanMatchFn } from '@angular/router';

export const dashboardCanLoadGuard: CanMatchFn = (route, segments) => {
  return false;
};
