import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-menu', pathMatch: 'full' },
  { path: 'view-menu', component: MenuItemListComponent},
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
