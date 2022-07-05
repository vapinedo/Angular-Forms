import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs'; 
import { UserModel } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrtationService {

  private url: string = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  register(userData: any) {
    return this._http.post<any>(this.url, userData)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
