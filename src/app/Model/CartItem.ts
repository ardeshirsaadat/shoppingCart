export class CartItem {
  id: number;
  product_name: string;
  product_quantity: number;
  product_price_single: number;
  product_price_total: number;
  product_url: string;
  constructor() {
    this.id = 1
    this.product_name = ''
    this.product_quantity = 1
    this.product_price_single = 1
    this.product_price_total = 1
    this.product_url = ''
  }
}