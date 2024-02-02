import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { BlogComponent } from "./blog/blog.component";
import { CareInstructionComponent } from "./care-instruction/care-instruction.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { ReturnsExchangesComponent } from "./returns-exchanges/returns-exchanges.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

const routes: Routes = [

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationsRoutingModule {}
