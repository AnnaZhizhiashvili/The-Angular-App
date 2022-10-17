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
import { EffectsModule } from '@ngrx/effects';
import { loginEffect } from './store/effects/login.effect';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { registerEffect } from './store/effects/register.effect';

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
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([loginEffect, registerEffect]),
    MatProgressSpinnerModule,
    SharedModule,
    RouterModule,
  ],
})
export class AuthModule {}
