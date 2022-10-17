import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { select, Store } from '@ngrx/store';
import { currentUserSelector } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  currentUser$ = this.store.pipe(select(currentUserSelector));
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['user/login']).then();
      return false;
    }
    return true;
  }
}
