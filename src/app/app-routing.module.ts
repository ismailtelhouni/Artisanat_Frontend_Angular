import { RegisterArtisanComponent } from './pages/auth/register-artisan/register-artisan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { OneProductComponent } from './pages/one-product/one-product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'register-artisan',
    component:RegisterArtisanComponent
  },
  {
    path:"",
    loadChildren: ()=> import("./pages/informations/informations.module").then(m=>m.InformationsModule)
  },
  {
    path:"artisan",
    loadChildren:()=> import("./pages/artisan/artisan.module").then(m=>m.ArtisanModule)
  },
  {
    path:"upload",
    component:UploadComponent
  },{
    path:"one-product",
    component:OneProductComponent
  },
  { 
    path:"checkout", 
    component:CheckoutComponent 
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
