import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContainerFormComponent } from './components/container-form/container-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RegisterArtisanComponent } from './register-artisan/register-artisan.component';
import { AvatarDialogComponent } from './components/avatar-dialog/avatar-dialog.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContainerFormComponent,
    ModalRegisterComponent,
    RegisterArtisanComponent,
    AvatarDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type : "ball-spin"}),
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AuthModule { }
