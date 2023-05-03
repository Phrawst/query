import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { CartComponent } from './page/cart/cart.component';

const routes: Routes = [
  { path: '',component: ProductListComponent },
  { path: 'product-list',component: ProductListComponent},
  { path: 'product-detail',component: ProductDetailComponent},
  { path: 'cart',component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
