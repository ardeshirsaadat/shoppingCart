import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../Model/Products';
import { ProductItemDetailComponent } from '../product-item-detail/product-item-detail.component';
import { FetchCartService } from '../service/fetch-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  amount: number = 0
  constructor(private fetchCartService: FetchCartService) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      description: '',
      url: '',

    }

  }

  addToCart(product: Product, amount: number) {
    let cartItem = {
      id: product.id,
      product_name: product.name,
      product_quantity: amount,
      product_price_single: product.price,
      product_price_total: amount * product.price,
      product_url: product.url
    }
    this.fetchCartService.addToCartService(cartItem)
    alert("item added to cart")
  }

  ngOnInit(): void {
  }

}
