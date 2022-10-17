import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import * as LoginActions from '../actions/login.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  LoginRequestInterface,
  LoginResponseInterface,
} from '../../types/login.interface';
import { RegisterRequestInterface } from '../../types/register.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class loginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  login$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(LoginActions.loginAction),
      switchMap((data: { request: LoginRequestInterface }) => {
        return this.authService.login(data.request).pipe(
          tap((res: LoginResponseInterface | null) => {
            window.localStorage.clear();
            this.authService.setToLocalStorage('accessToken', res!.accessToken);
            this.authService.setToLocalStorage('currentUser', res!.user);
            this.router.navigateByUrl('products').then();
          }),
          map((res: LoginResponseInterface | null) =>
            LoginActions.loginSuccessAction({ currentUser: res!.user })
          ),
          catchError(() => {
            this.toastr.error('please try again', 'Wrong Password or Email', {
              timeOut: 3000,
              positionClass: 'toast-bottom-right',
            });
            return of(LoginActions.loginFailureAction());
          })
        );
      })
    );
  });
}
