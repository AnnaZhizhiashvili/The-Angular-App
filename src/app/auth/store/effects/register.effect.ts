import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import * as RegisterActions from '../actions/login.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { RegisterRequestInterface } from '../../types/register.interface';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class registerEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  register$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(RegisterActions.registerAction),
      switchMap((data: { request: RegisterRequestInterface }) => {
        return this.authService.register(data.request).pipe(
          map((data) => {
            RegisterActions.registerSuccessAction();
            this.toastr.success(
              'now try to log in',
              "You've registered Successfully",
              {
                timeOut: 3000,
                positionClass: 'toast-bottom-right',
              }
            );
            this.router.navigateByUrl('login').then();
          }),
          catchError((err) => {
            this.toastr.error('Something Went Wrong!', err.error, {
              timeOut: 3000,
              positionClass: 'toast-bottom-right',
            });
            return of(RegisterActions.registerFailureAction());
          })
        );
      })
    );
  });
}
