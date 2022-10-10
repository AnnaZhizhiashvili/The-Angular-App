import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  register(data) {
    const url = this.apiUrl + '/users';
    return this.http.post(url, data);
  }

  login(data) {
    const url = this.apiUrl + '/login'
    return this.http.post(url, data).pipe(
      tap((res:any) => {
          window.localStorage.setItem('accessToken', res.accessToken)
      })
    )
  }

  isLoggedIn(): boolean {
    if(window.localStorage.getItem('accessToken')) return true;
    return false;
  }

}
