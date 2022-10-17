import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequestInterface } from '../types/register.interface';
import {
  LoginRequestInterface,
  LoginResponseInterface,
} from '../types/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(
    data: RegisterRequestInterface
  ): Observable<LoginResponseInterface | null> {
    const url = this.apiUrl + '/users';
    return this.http.post<LoginResponseInterface>(url, data);
  }

  login(
    data: LoginRequestInterface
  ): Observable<LoginResponseInterface | null> {
    const url = this.apiUrl + '/login';
    return this.http.post<LoginResponseInterface>(url, data);
  }

  isLoggedIn() {
    if (this.getFromLocalStorage('accessToken')) return true;
    else return false;
  }

  setToLocalStorage(key, data) {
    return window.localStorage.setItem(key, JSON.stringify(data));
  }
  getFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key)!);
  }
}
