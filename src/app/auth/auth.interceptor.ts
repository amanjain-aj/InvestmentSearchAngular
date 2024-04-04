// auth.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the access token from wherever you store it (localStorage, session storage, etc.)
    const accessToken = this.cookieService.get('accessToken');

    if (accessToken) {
      // Clone the request and attach the access token to the Authorization header
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // Pass the cloned request with the access token to the next handler
      return next.handle(authReq);
    }

    // If there's no access token, simply pass the original request
    return next.handle(request);
  }
}
