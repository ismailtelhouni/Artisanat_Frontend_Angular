import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FiltersComponent } from './products/components/filters/filters.component';
import { ProductsHeaderComponent } from './products/components/products-header/products-header.component';
import { ProductBoxComponent } from './products/components/product-box/product-box.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    FiltersComponent,
    ProductsHeaderComponent,
    ProductBoxComponent,
    CartComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
  ]
})
export class PagesModule { }
