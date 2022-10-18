import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  loginFailureAction,
  loginSuccessAction,
  logOutAction,
} from '../../../auth/store/actions/login.action';
import { select, Store } from '@ngrx/store';
import { CurrentUserInterface } from '@shared/types/currentUser.interface';
import { Observable } from 'rxjs';
import { currentUserSelector } from '../../../auth/store/selectors';
import { AuthService } from '../../../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/components/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface | null>;
  constructor(
    private router: Router,
    private store: Store,
    private auth: AuthService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    const currentUser = this.auth.getFromLocalStorage('currentUser');
    if (currentUser) {
      this.store.dispatch(loginSuccessAction({ currentUser }));
    } else {
      this.store.dispatch(loginFailureAction());
    }
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  logOut() {
    this.router.navigateByUrl('login').then();
    this.store.dispatch(logOutAction());
    window.localStorage.clear();
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '500px',
    });
  }
}
