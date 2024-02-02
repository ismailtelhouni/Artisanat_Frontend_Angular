import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddProductComponent } from "./add-product/add-product.component";

const routes: Routes =[
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"addProduct",
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtisanRoutingModule {}
