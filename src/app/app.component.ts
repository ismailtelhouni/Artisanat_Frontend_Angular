import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/utils/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pf_Artis';
  cart: Cart = {items:[]};

  constructor(private cartService:CartService) {}

  ngOnInit(): void {
      this.cartService.cart.subscribe((_cart)=>{
        this.cart = _cart;
      });
  }

}
