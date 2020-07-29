import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product'
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/app.reducer';
import { /* AddToCart,RemoveFromCart,*/ REMOVE_PRODUCT, ADD_PRODUCT } from '../store/app.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


inCart = false;
@Input() product: Product;

  constructor(private ngRedux: NgRedux<InitialState>) { }

  ngOnInit(): void {}

  addToCart(item: Product) {
    this.ngRedux.dispatch(
      { 
        type: ADD_PRODUCT,
        val: item
      }
    );
    this.inCart = true;
}

removeFromCart(item: Product) {
  this.ngRedux.dispatch(
    { 
      type: REMOVE_PRODUCT,
      val: item
    }
  );
  this.inCart = false;
}

}
