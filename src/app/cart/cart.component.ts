import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../Model/CartItem';
import { Product } from '../Model/Products';
import { FetchCartService } from '../service/fetch-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItem: CartItem[] = []
  name: string = ''
  address: string = ''
  creditCardNumber: string = ''

  constructor(private fetchCartService: FetchCartService, private router: Router) {

  }

  ngOnInit(): void {
    this.cartItem = this.fetchCartService.getCart()

  }

  calculateTotalCost() {
    return this.fetchCartService.CalculateTotalCost()
  }


  submitForm() {
    let user = {
      fullName: this.name,
      address: this.address,
      creditCard: this.creditCardNumber,
      total: this.fetchCartService.CalculateTotalCost()
    }
    this.fetchCartService.updateUserInfo(user)
    this.router.navigateByUrl("/checkout")

  }

}


