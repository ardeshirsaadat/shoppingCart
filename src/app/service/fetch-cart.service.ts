import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CartItem } from "../Model/CartItem";
import { User } from '../Model/User';
@Injectable({
  providedIn: 'root'
})
export class FetchCartService {
  cart: CartItem[] = []
  cost: number
  userInfo: User = {
    fullName: '',
    address: '',
    creditCard: '',
    total: 0
  }
  constructor() {
    this.cost = 0
  }

  getCart(): CartItem[] {
    return this.cart
  }

  addToCartService(cartitem: CartItem) {
    let tempCart = this.cart.filter(item => item.id == cartitem.id)
    if (tempCart.length == 0) {
      this.cart.push(cartitem)
    } else {
      this.changeQuantityService(cartitem.id, cartitem.product_quantity)
    }


  }

  changeQuantityService(product_id: number, quantity: number) {
    this.cart.find(product => {
      if (product.id == product_id) {
        product.product_quantity = quantity
      }
    })
  }

  CalculateTotalCost() {
    this.cost = 0
    this.cart.map((p => {
      this.cost += p.product_price_single * p.product_quantity


    }))
    return this.cost
  }

  updateUserInfo(user: User) {
    Object.assign(this.userInfo, user)
  }

  getUserinfo() {
    return [this.userInfo.fullName, this.userInfo.total]
  }

  removeItemService(id: number) {
    this.cart.map((p, index) => {
      if (p.id == id) {
        this.cart.splice(index, 1)
      }
    })
  }


}
