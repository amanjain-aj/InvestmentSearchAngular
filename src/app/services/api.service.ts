import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { searchData } from '../models/serach';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl; // Change this to your API endpoint
  headers: any;
 

  constructor(private http: HttpClient, private cookieService: CookieService) {

    this.headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.cookieService.get('accessToken')}`)
    .set('Content-Type', 'application/json');
  }

  search(seachTerm:any): Observable<searchData[]> {
    let params = new HttpParams();

    return this.http.get<searchData[]>(this.apiUrl+"/search",{ params: params, headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
 
    
    return throwError(
      'Something bad happened; please try again later.');
  }
  
}
