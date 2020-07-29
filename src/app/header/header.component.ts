import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/app.reducer';
import { Product } from '../product/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: Array<Product>;

  constructor(private ngRedux: NgRedux<InitialState>) { 
    this.ngRedux
    .select<Array<Product>>('cart')
    .subscribe((items: Array<Product>) =>{
      this.cart=items;
    });
  }

  ngOnInit(): void {
  }

}
