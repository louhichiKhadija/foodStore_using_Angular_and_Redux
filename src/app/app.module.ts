import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';

import { ShopReducer, InitialState, initialState } from './store/app.reducer';
import { createLogger } from 'redux-logger';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  constructor(ngRedux: NgRedux<InitialState>,private dev: DevToolsExtension){
    const enhancer = isDevMode() ? [dev.enhancer()] : [];
    const logger = isDevMode() ? [createLogger()] : [];
    ngRedux.configureStore(ShopReducer, initialState, logger, enhancer);
  }
  
  
}
