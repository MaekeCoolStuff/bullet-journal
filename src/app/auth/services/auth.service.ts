import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/login-user';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(public httpClient: HttpClient) {

  }

  public loginUser(user: LoginUser) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post(environment.apiUrl + 'users/authenticate', user, httpOptions);
  }
}