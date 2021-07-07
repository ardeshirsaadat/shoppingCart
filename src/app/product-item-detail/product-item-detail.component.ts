import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model/Products';
import { ActivatedRoute } from '@angular/router';
import { FetchProductsService } from '../service/fetch-products.service';
import { FetchCartService } from '../service/fetch-cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  productId: number = 0
  product: Product;
  amount: number = 0
  constructor(private route: ActivatedRoute, private fetchProductService: FetchProductsService, private fetchCartService: FetchCartService) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      description: '',
      url: '',

    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.productId = params['id'])
    this.fetchProductService.getProducts().subscribe(products => this.product = products[this.productId - 1])


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

}
