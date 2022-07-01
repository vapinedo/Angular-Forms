import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private _url: string = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(user: UserModel) {
    return this._http.post<any>(this._url, user);
  }
}
