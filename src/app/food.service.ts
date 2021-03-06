import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from './store/app.reducer';
import { Product } from './product/product';
import { FETCH_PRODUCT } from './store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<InitialState>
  ) { }

  getAll() {
    this.http
      .get('http://localhost:4000/fruits')
      .subscribe((products: Array<Product>) => {
        this.ngRedux.dispatch(
          { 
            type: FETCH_PRODUCT,
            val: products
          });
      });
  }
  
}

