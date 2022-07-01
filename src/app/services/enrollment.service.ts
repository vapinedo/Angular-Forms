import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs'; 
import { UserModel } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private _url: string = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(user: UserModel) {
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
