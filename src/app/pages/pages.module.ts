import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsHeaderComponent } from './products/components/products-header/products-header.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { InformationsModule } from './informations/informations.module';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedProductsComponent } from './home/components/featured-products/featured-products.component';
import { CardProductComponent } from './home/components/card-product/card-product.component';
import { HandcraftedComponent } from './home/components/handcrafted/handcrafted.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsHeaderComponent,
    HomeComponent,
    FeaturedProductsComponent,
    CardProductComponent,
    HandcraftedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InformationsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
