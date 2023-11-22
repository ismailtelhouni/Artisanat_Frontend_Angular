import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/informations/about-us/about-us.component';
import { ContactUsComponent } from './pages/informations/contact-us/contact-us.component';
import { BlogComponent } from './pages/informations/blog/blog.component';
import { CareInstructionComponent } from './pages/informations/care-instruction/care-instruction.component';
import { TermsConditionsComponent } from './pages/informations/terms-conditions/terms-conditions.component';
import { ReturnsExchangesComponent } from './pages/informations/returns-exchanges/returns-exchanges.component';
import { PrivacyPolicyComponent } from './pages/informations/privacy-policy/privacy-policy.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"care-instruction",
    component:CareInstructionComponent
  },
  {
    path:"terms-conditions",
    component:TermsConditionsComponent
  },
  {
    path:"returns-exchanges",
    component:ReturnsExchangesComponent
  },
  {
    path:"privacy-policy",
    component:PrivacyPolicyComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
