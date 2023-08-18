import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User | undefined;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(environment.apiUrl + 'Auth', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.jwtToken);
          localStorage.setItem('user', JSON.stringify(user.userName));
          this.decodedToken = this.jwtHelper.decodeToken(user.jwtToken);
          this.currentUser = user.userName;
        }
      })
    );
  }

  // register(user: User) {
  //   return this.http.post(this.baseUrl + 'register', user);
  // }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(username: string, password: string) {
    return this.http.post<{ message: string }>(`${environment.apiUrl}/register`, { username, password });
  }

  // logout() {
  //   return this.http.post<{ message: string }>(`${environment.apiUrl}/logout`, {});
  // }
}
