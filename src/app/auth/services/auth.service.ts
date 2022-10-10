import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  register(data) {
    const url = this.apiUrl + '/users';
    return this.http.post(url, data).pipe(
      tap(() => {
          this.toastr.success('You\'ve registered Successfully, now try to log in', '^_^', {
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
          });
          this.router.navigateByUrl ('/login').then();
        }),
      catchError(() => {
        this.toastr.error('Something Went Wrong!', ':/', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
        return of(null)
      })
    )
  }

  login(data) {
    const url = this.apiUrl + '/login'
    return this.http.post(url, data).pipe(
      tap((res:any) => {
          window.localStorage.clear();
          window.localStorage.setItem('accessToken', res.accessToken);
          this.router.navigateByUrl('dashboard').then();
      }),
      catchError(() => {
        this.toastr.error('please try again', 'Wrong Password or Email', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
        return of(null);
      })
    )
  }

  isLoggedIn(): boolean {
    if(window.localStorage.getItem('accessToken')) return true;
    return false;
  }

}
