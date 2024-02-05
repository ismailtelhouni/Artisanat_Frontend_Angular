import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { UserDataService } from '../auth/user-data.service';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items:[]});

  private datePipe = new DatePipe('en-US');

  constructor(
    private _snackBar:MatSnackBar,
    private userDataService:UserDataService
    ) { }

  addToCart(item:CartItem):void{
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item)=>_item.id === item.id);

    if(itemInCart){
      itemInCart.quantity+=item.quantity;
    }else{
      items.push(item);
    }

    this.cart.next({items});

    this._snackBar.open('1 item added to cart.','ok',{duration:3000});
    console.log(this.cart.value);
  }

  getTotal(items: Array<CartItem>):number{
    return items
    .map((item)=>item.prix*item.quantity)
    .reduce((prev,current)=>prev+current,0)
  }


  clearCart():void{
    this.cart.next({items:[]});
    this._snackBar.open('Cart is cleared','ok',{duration:3000});
  }


  removeFromCart(item: CartItem):void{
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id);
    // Update the cart with the modified items array
    this.cart.next({ items: filteredItems });
    this._snackBar.open('Item removed from cart.','ok',{duration:3000});
  }

  addQuantity(item:CartItem):void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item)=>_item.id === item.id);

    if(itemInCart){
      itemInCart.quantity++;

      this.cart.next({ items: items });
      this._snackBar.open('Item quantity +1.','ok',{duration:3000});
    }
  }

  removeQuantity(item:CartItem):void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item)=>_item.id === item.id);

    if(itemInCart){
      if(itemInCart.quantity!==1){
        itemInCart.quantity--;
        this.cart.next({ items: items });
        this._snackBar.open('Item quantity -1.','ok',{duration:3000});
      }
    }
  }



  getOrderPayload(): any {
    const orderPayload = {
      date_commande: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      user: this.userDataService.getUserData()?.userId, // Replace with the actual user ID
      ligneCommandes: this.cart.value.items.map(item => {
        return {
          produit: { produitId: parseInt(item.id, 10) },
          prixUnitaire: item.prix,
          quantite: item.quantity
        };
      })
    };
    return orderPayload;
  }


}
