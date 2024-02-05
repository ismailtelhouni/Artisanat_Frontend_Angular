import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { OrderDataService } from 'src/app/services/apis/order-data.service';
import { CartService } from 'src/app/services/utils/cart.service';
import { NavigationService } from 'src/app/services/utils/navigation';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  checkoutForm: FormGroup =this.formBuilder.group({
    // Define your form controls and validators here
  });;

  cart: Cart = {items: [{
    product: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    name: 'snickers',
    prix: 150,
    quantity: 1,
    id: '1',
  }]};

  dataSource: Array<CartItem> = [];

  constructor(
    private formBuilder: FormBuilder,
    private navigationService: NavigationService, 
    private cartService: CartService,
    private orderDataService: OrderDataService,
    private toaster:ToastrService
    ){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart)=>{
      this.cart=_cart;
      this.dataSource = this.cart.items;
    });

    this.checkoutForm = this.formBuilder.group({
      // ... (existing form controls)
      city: ['', Validators.required],
      street: ['', Validators.required],
      apartment: [''],
      postcode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      country: ['',[Validators.required]]
   });
  }

  placeOrder() {
    const orderPayload = this.cartService.getOrderPayload();

    // Assuming you have some logic to check if payment is successful
    // If payment is successful, send the order to the backend
    this.orderDataService.placeOrder(orderPayload).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        // Optionally, you can clear the cart or perform other actions
        this.cartService.clearCart();
      },
      (error) => {
        console.error('Error placing order:', error);
        // Handle the error, e.g., show a user-friendly message
      }
    );

    this.toaster.success(" Success " , " Payment Success : Order passed ");
    this.navigateTo('/client/dashboard');
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


  placeOrderExternal(): void {
    // Trigger form submission externally
    if (this.checkoutForm.valid) {
      this.placeOrder();
    } else {
      // If the form is invalid, mark all fields as touched to show validation messages
      this.formGroupDirective.form.markAllAsTouched();
      this.placeOrder();
    }
  }

}
