import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContainerFormComponent } from './components/container-form/container-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContainerFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
