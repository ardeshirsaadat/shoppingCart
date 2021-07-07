import { Component, OnInit } from '@angular/core';
import { Product } from "../Model/Products";
import { FetchProductsService } from '../service/fetch-products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []
  constructor(private serviceProducts: FetchProductsService) { }

  ngOnInit(): void {
    this.serviceProducts.getProducts().subscribe(products => this.products = products)
  }

}
