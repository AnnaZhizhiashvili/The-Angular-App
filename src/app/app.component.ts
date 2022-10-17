import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { currentUserSelector } from './auth/store/selectors';
import { CurrentUserInterface } from './shared/types/currentUser.interface';
import { AuthService } from './auth/services/auth.service';
import {
  loginFailureAction,
  loginSuccessAction,
} from './auth/store/actions/login.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface | null>;
  constructor(private store: Store, private auth: AuthService) {}

  ngOnInit() {
    const currentUser = this.auth.getFromLocalStorage('currentUser');
    if (currentUser) {
      this.store.dispatch(loginSuccessAction({ currentUser }));
    } else {
      this.store.dispatch(loginFailureAction());
    }
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
