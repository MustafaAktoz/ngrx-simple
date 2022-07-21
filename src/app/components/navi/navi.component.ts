import { Product } from './../../models/product';
import { CartItem } from './../../models/cart-item';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RemoveFromCart } from 'src/app/store/actions/cart-actions';
import cartReducer from 'src/app/store/reducers/cart-reducer';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  cartItems:CartItem[];
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems(){
    this.store.select(cartReducer.name).subscribe(state=>this.cartItems = state.cartItems)
  }

  removeFromCart(product:Product){
    this.store.dispatch(new RemoveFromCart(product))
  }
}