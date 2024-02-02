import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CareInstructionComponent } from './care-instruction/care-instruction.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnsExchangesComponent } from './returns-exchanges/returns-exchanges.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { InformationsRoutingModule } from './informations-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



// AoT requires an export function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutUsComponent,
    BlogComponent,
    CareInstructionComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    ReturnsExchangesComponent,
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    InformationsRoutingModule
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports : [
    AboutUsComponent,
    BlogComponent,
    CareInstructionComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    ReturnsExchangesComponent,
    TermsConditionsComponent
  ]
})
export class InformationsModule { }
