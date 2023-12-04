import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/utils/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _cart: Cart = {items:[]};
  itemQuantity = 0;

  @Input()
  get cart():Cart{
    return this._cart;
  }

  set cart(cart:Cart){
    this._cart=cart;

    this.itemQuantity = cart.items
      .map((item)=>item.quantity)
      .reduce((prev,current)=>prev + current , 0);
  }

  constructor(private router: Router, private cartService:CartService) {}
  navigateTo( route: string ): void {
    this.router.navigate([ route ]);
  }

  getTotal(items: Array<CartItem>):number{
    return this.cartService.getTotal(items);
  }

  onClearCart():void{
    this.cartService.clearCart();
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }

}
