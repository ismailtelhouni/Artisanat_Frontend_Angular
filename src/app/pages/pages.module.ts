import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FiltersComponent } from './products/components/filters/filters.component';
import { ProductsHeaderComponent } from './products/components/products-header/products-header.component';
import { ProductBoxComponent } from './products/components/product-box/product-box.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { InformationsModule } from './informations/informations.module';
import { FeaturedProductsComponent } from './home/components/featured-products/featured-products.component';
import { CardProductComponent } from './home/components/card-product/card-product.component';
import { HandcraftedComponent } from './home/components/handcrafted/handcrafted.component';
import { OneProductComponent } from './one-product/one-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


// AoT requires an export function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    FiltersComponent,
    ProductsHeaderComponent,
    ProductBoxComponent,
    CartComponent,
    FeaturedProductsComponent,
    CardProductComponent,
    HandcraftedComponent,
    OneProductComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InformationsModule,
  ],
  exports: [],
})
export class PagesModule { }
