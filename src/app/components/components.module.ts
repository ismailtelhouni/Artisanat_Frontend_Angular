import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { SharedModule } from '../shared/shared.module';
import { UploadComponent } from './upload/upload.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { PaymentComponent } from './test/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TestComponent,
    UploadComponent,
    TopBarComponent,
    LanguageSelectComponent,
    PaymentComponent,
  ],
  imports: [
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TestComponent,
    TopBarComponent,
    PaymentComponent
  ]
})
export class ComponentsModule { }
