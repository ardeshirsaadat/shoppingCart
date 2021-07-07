import { Component, OnInit } from '@angular/core';
import { FetchCartService } from '../service/fetch-cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  user_info: string = ''
  user_total: number = 0
  constructor(private fetchCartService: FetchCartService) { }

  ngOnInit(): void {
    let values = this.fetchCartService.getUserinfo()
    this.user_info = values[0].toString()
    this.user_total = Number(values[1])

  }

}
