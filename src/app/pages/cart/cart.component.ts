import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/utils/cart.service';
import { NavigationService } from 'src/app/services/utils/navigation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {items: [{
    product: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    name: 'snickers',
    price: 150,
    quantity: 1,
    id: 1,
  },
  {
    product: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    name: 'snickers dnahdjfnjafauid fwjfnjeje fwjfnjwfnj dsd',
    price: 150,
    quantity: 3,
    id: 1,
  }]};

  dataSource: Array<CartItem> = [];
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private navigationService: NavigationService, private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart)=>{
      this.cart=_cart;
      this.dataSource = this.cart.items;
    })
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

  getTotal(items: Array<CartItem>):number{
    return this.cartService.getTotal(items);
  }

  onClearCart(): void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item:CartItem):void{
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item:CartItem):void{
    this.cartService.addQuantity(item);
  }

  onRemoveQuantity(item:CartItem):void{
    this.cartService.removeQuantity(item);
  }


}
