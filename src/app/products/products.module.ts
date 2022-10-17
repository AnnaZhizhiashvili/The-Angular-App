import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from '../auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
