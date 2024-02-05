import { Component } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { OrderDataService } from 'src/app/services/apis/order-data.service';
import { CartService } from 'src/app/services/utils/cart.service';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(
    private orderDataService: OrderDataService, 
    private cartService: CartService
  ) {}

  async submitPaymentForm() {
    const stripe = await stripePromise;
    const { sessionId } = await fetch('/api/create-checkout-session', { method: 'POST' }).then(response => response.json());

    const result = await stripe?.redirectToCheckout({
      sessionId: sessionId
    });

    if (result?.error) {
      // Handle errors
    }
  }
}
