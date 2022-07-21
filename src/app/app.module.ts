import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NaviComponent } from './components/navi/navi.component';

import { StoreModule } from '@ngrx/store';
import cartReducer from './store/reducers/cart-reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartReducer:cartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
