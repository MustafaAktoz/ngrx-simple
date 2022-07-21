import { AddToCart } from './../../store/actions/cart-actions';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]

  constructor(private store: Store) {
    this.products = [
      { id: 1, name: "Computer" },
      { id: 2, name: "Keyboard" },
      { id: 3, name: "Mouse" }
    ]
  }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.store.dispatch(new AddToCart(product))
  }

}