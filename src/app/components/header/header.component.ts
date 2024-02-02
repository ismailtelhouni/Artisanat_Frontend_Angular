import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserData } from 'src/app/models/auth.model';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/auth/user-data.service';
import { CartService } from 'src/app/services/utils/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user!:any

  isAuthenticated: boolean = false;

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

  ngOnInit(): void {
    this.service.isAuthenticated$.subscribe((isAuthenticated)=>{
      this.isAuthenticated = isAuthenticated;
    })
    this.isAuthenticated = this.service.isUserAuthenticated();
  }

  constructor(
    private router: Router,
    private cartService:CartService,
    private userDataService : UserDataService,
    private service : AuthService,
    private toaster:ToastrService,
    ) {}
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


  getUser(){

    this.user = this.userDataService.getUserData()
    console.log(this.user)

  }

  logout(){

    this.service.logout().subscribe(data =>{

      console.log(data)
      const D = data as { message : string }
      this.toaster.error("Logout ", D.message )
      this.navigateTo("/login")

    },error =>{

      this.toaster.error(error.error.text)

      // this.isLoggingIn = false
      // this.spinner.hide()

    })

  }

}
