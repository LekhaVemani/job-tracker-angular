import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('loggedIn');

  if (isLoggedIn === 'true') {
    return true;
  } else {
    router.navigate(['/login']); // ✅ correct way
    return false;
  }
};