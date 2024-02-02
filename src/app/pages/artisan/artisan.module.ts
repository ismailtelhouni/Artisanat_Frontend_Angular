import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtisanRoutingModule } from './artisan-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FiltersComponent } from './components/filters/filters.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { CarouselImageComponent } from './components/carousel-image/carousel-image.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddProductComponent } from './add-product/add-product.component';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsFilterComponent,
    FiltersComponent,
    ProductBoxComponent,
    DashboardHeaderComponent,
    CarouselImageComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ArtisanRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ArtisanModule { }
