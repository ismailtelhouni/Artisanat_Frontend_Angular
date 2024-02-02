import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/apis/product-data.service';
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

  products: Array<Product> | undefined;

  constructor(
    private cartService:CartService,
    private productService:ProductDataService,
    private router:Router
    ) {}

  navigateTo( productId: string ): void {
    // console.log("route: ", route);
    this.router.navigate(['/one-product'], { queryParams: { id: productId } });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((_products) => {
        this.products = _products;
        console.log("results:",_products);
      });
  }

  onColumnsCountChange(colsNum: number):void{
    this.cols = colsNum;
  }

  onShowCategory(category: string):void{
    this.category = category;
  }

  onAddToCart(product: Product){
    this.cartService.addToCart({
      product:product.images[0].path,
      name:product.nom,
      prix: product.prix,
      quantity: 1,
      id: product.id
    });
  }
}
