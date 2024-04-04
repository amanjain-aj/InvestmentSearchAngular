// auth-guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,private cookieService: CookieService) { }

  canActivate(): boolean {
    if (this.cookieService.get('accessToken')) {
      // Access token exists, prevent navigation to the login page
      this.router.navigate(['/dashboard']); // Navigate to another page (e.g., dashboard)
      return false;
    }
    return true; // Allow navigation to the login page
  }
}
