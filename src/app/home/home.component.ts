import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FoodService } from '../food.service'
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @select('items') items$: Observable<Array<Product>>;

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.foodService.getAll();
  }


}
