import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../Model/CartItem';
import { FetchCartService } from '../service/fetch-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  amount: number = 0
  @Input() cartItem: CartItem
  constructor(private fetchCartService: FetchCartService) {
    this.cartItem = {
      id: 0,
      product_name: '',
      product_quantity: 0,
      product_price_single: 0,
      product_price_total: 0,
      product_url: ''
    }
  }

  ngOnInit(): void {
    this.amount = this.cartItem.product_quantity
  }

  changeQuantity(cartItem: CartItem, num: number) {
    this.fetchCartService.changeQuantityService(cartItem.id, num)
  }

  removeItem(cartItem: CartItem) {
    this.fetchCartService.removeItemService(cartItem.id)
  }

}
