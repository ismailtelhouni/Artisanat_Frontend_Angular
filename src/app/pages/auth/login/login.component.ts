import { User, UserData } from './../../../models/auth.model';
import { Component, OnInit , ChangeDetectorRef, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavigationService } from 'src/app/services/utils/navigation';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisterComponent } from '../components/modal-register/modal-register.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/auth/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  image:String = "assets/img/login.jpg";

  loginForm!:FormGroup;

  user!:any;

  @Output() isLoggingIn :boolean = false;

  constructor(
    private fb:FormBuilder ,
    private service:AuthService,
    private toaster:ToastrService,
    private navigation:NavigationService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private userDataService : UserDataService,

    ) {}

  ngOnInit(): void {
      this.createForm()
  }

  createForm(){

    this.loginForm = this.fb.group({
      email:[ '' , [ Validators.required , Validators.email ]],
      password:[ '' , [ Validators.required , Validators.minLength(3) , Validators.maxLength(20) ]]
    })

  }

  navigateTo( route: string ): void {
    this.navigation.navigateTo(route)
  }

  login(){

    // this.isLoggingIn = true
    // this.spinner.show()

    this.service.login(this.loginForm.value).subscribe(data => {

      const userData = data as UserData
      console.log(userData)
      if( userData.message == "Success" ){

        this.userDataService.storeUserData(userData)
        console.log("userDataaaaaaaaaaaaaaaaaaaa",userData.userId)
        console.log("tokennnnnnnnnnnnn",userData.token)
        console.log("roooooole",userData.role)
        console.log("storageeeeeeeeee",this.userDataService.getUserData())
        if(userData.role == "ROLE_ARTISAN"){
          this.toaster.success(" Success " , " Login Success ")
          this.navigation.navigateTo("/artisan/dashboard")
        }else{
          this.toaster.success(" Success " , " Login Success ")
          this.navigation.navigateTo("/home")
        }


      }else{

        this.toaster.error(" Error " , userData.message )

      }

    },error =>{

      this.toaster.error(error.error.text)

      // this.isLoggingIn = false
      // this.spinner.hide()

    })

  }

  openChoiceModal(): void {
    const dialogRef = this.dialog.open(ModalRegisterComponent, {
      width: '300px', // ajustez la largeur en fonction de vos besoins
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
