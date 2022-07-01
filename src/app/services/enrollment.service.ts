import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url: string = '';

  constructor(private _http: HttpClient) { }

  enroll(user: UserModel) {
    return this._http.post<any>(this.url, user);
  }
}
