import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent, SpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatToolbarModule],
  exports: [NavbarComponent, PageNotFoundComponent, SpinnerComponent],
})
export class SharedModule {}
