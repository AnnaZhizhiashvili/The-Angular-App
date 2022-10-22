import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AuthStateInterface } from '../../types/authState.interface';
import { registerAction } from '../../store/actions/login.action';
import { isSubmittingSelector } from '../../store/selectors';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: UntypedFormGroup;
  isSubmitting$;
  constructor(
    private fb: FormBuilder,
    private store: Store<AuthStateInterface>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
    });
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
  registerUser() {
    this.store.dispatch(registerAction({ request: this.form.value }));
  }
  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '500px',
    });
  }
}
