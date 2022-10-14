import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logOutAction } from '../../../auth/store/actions/login.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  logOut() {
    this.router.navigateByUrl('login').then();
    this.store.dispatch(logOutAction());
    window.localStorage.clear();
  }
}
