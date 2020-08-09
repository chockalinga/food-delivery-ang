import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';


import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/service cart';


@NgModule({
  declarations: [
    AppComponent,
    MenuItemListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
