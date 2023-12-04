import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  product: Product | undefined={
    id: 1,
    title: "string",
    price: 130,
    category:"string",
    description:"string",
    image:"https://artisans-dumaroc.com/cdn/shop/products/Deepdishbeldi_800x.png?v=1625869556",
  };

  @Output() AddToCart = new EventEmitter();

  onAddToCart():void{
    this.AddToCart.emit(this.product);
  }
}
