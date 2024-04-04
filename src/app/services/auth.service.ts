import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: any ;


  constructor(private http: HttpClient,private cookieService: CookieService) { }

  login(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  logout(): void {
    this.cookieService.delete('loggedIn');
    this.cookieService.delete('accessToken')
  }

  isLoggedIn(): boolean {
    return this.cookieService.get('loggedIn') === 'true';
  }
  private handleError(error: any) {
    let errorMessage = 'An error occurred';
    if (error.error && error.error.error) {
      errorMessage = error.error.error;
    }
    return throwError(errorMessage);
  }
  clearLocalStorage() {
    this.cookieService.deleteAll();
  }
}
