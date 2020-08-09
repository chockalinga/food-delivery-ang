import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private baseUrl = 'http://localhost:8082/api/';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getMenuList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'menus-list',this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  createMenu(menu: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-menu', JSON.stringify(menu),this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
     
  deleteMenu(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-menu/${id}`, { responseType: 'text' });
  }

  getMenu(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/menu/${id}`);
  }

  updateMenu(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-menu/${id}`, value);
  }
  
}                                           