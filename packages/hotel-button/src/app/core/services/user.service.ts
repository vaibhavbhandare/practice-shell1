import { Injectable } from '@angular/core';
import { Http } from '@orxe-sdk/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/index';


const USER_PROFILE_URL = '../../../assets/user.json';

@Injectable()
export class UserService {
  private _http: Http = new Http();

  constructor() {}

  getUser(): Observable<IUser> {
    return this._http.get<IUser>(USER_PROFILE_URL);
  }
}
