import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  exports: [RegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
  ],
})
export class AuthModule {}
