import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { catchError, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { select, Store } from '@ngrx/store';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector } from '../../store/selectors';
import { AuthStateInterface } from '../../types/authState.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../register/register.component.scss'],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  isSubmitting$;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private store: Store<AuthStateInterface>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  login() {
    this.store.dispatch(loginAction({ request: this.form.value }));
  }
}
