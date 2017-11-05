import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UserModel} from "../models/user.model";

@Injectable()
export class AuthenticationService {
  public token: string;
  // public headers = new Headers({
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // });

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(model: any): Observable<boolean> {

    return this.http.post('/api/auth/login', model)
      .map((data: any) => {

        let token = data.token;

        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }

      });

  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }


}
