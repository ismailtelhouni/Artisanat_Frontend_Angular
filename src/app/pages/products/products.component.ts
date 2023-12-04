import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/utils/cart.service';
const ROWS_HEIGHT: {[id:number]:number} = { 1: 400, 3: 335, 4:350 };

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  category:string|undefined;

  cols=3;

  rowHeight=ROWS_HEIGHT[this.cols];

  constructor(private cartService:CartService) {}


  onColumnsCountChange(colsNum: number):void{
    this.cols = colsNum;
  }

  onShowCategory(category: string):void{
    this.category = category;
  }

  onAddToCart(product: Product){
    this.cartService.addToCart({
      product:product.image,
      name:product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }
}
