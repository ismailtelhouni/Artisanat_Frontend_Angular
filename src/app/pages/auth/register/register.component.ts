import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/models/auth.model';
import { ToastrService } from 'ngx-toastr';
import { NavigationService } from 'src/app/services/utils/navigation';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/auth/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

  image:String = "../../../../assets/img/register.jpg"

  registerForm!:FormGroup;

  selectedFile: File | null = null;

  page :number = 1;

  validation_messages = {
    'email': [
      { type: 'required', message: 'email is required.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' }
    ],
    'comPassword': [
      { type: 'required', message: 'comfirmation is required.' }
    ],
    'nom': [
      { type: 'required', message: 'nom is required.' }
    ],
    'prenom': [
      { type: 'required', message: 'prenom is required.' }
    ],
    'ville': [
      { type: 'required', message: 'ville is required.' }
    ],
    'rue': [
      { type: 'required', message: 'rue address is required.' }
    ],
    'numero': [
      { type: 'required', message: 'number address is required.' }
    ],
    'telephone': [
      { type: 'required', message: 'telephone is required.' }
    ],
    'profile': [
      { type: 'required', message: 'profile is required.' }
    ]
  };

  constructor(
    private fb : FormBuilder ,
    private service : AuthService ,
    private userDataService : UserDataService,
    private toaster:ToastrService,
    private navigation:NavigationService,
    private sanitizer: DomSanitizer,
  ){}

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.registerForm = this.fb.group({
      nom       : [ '' , [ Validators.required ] ],
      prenom    : [ '' , [ Validators.required ] ],
      ville     : [ '' , [ Validators.required ] ],
      rue       : [ '' , [ Validators.required ] ],
      numero    : [ '' , [ Validators.required ] ],
      role      : [ '' , [ Validators.required ] ],
      telephone : [ '' , [ Validators.required ] ],
      profile   : [ '' , [ Validators.required ] ],
      email     : [ '' , [ Validators.required , Validators.email ] ],
      password  : [ '' , [ Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ],
      comPassword  : [ '' , [ Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ]
    })
  }

  register(){

    const formData = new FormData();
    if ( this.selectedFile ) {

      formData.append('profile', this.selectedFile, this.selectedFile.name);
      formData.append('nom', this.registerForm.value.nom );
      formData.append('prenom', this.registerForm.value.prenom);
      formData.append('telephone', this.registerForm.value.telephone);
      formData.append('email', this.registerForm.value.email);
      formData.append('password', this.registerForm.value.password);
      formData.append('rue', this.registerForm.value.rue);
      formData.append('ville', this.registerForm.value.ville);
      formData.append('numero', this.registerForm.value.numero);
      formData.append('role', "ROLE_CLIENT");
    }
    console.log(formData)

    // const role = {
    //   "name":"ROLE_CLIENT"
    // }
    // this.registerForm.get("role")?.setValue(role)
    // console.log(this.registerForm.value)

    this.service.register(formData).subscribe(data => {

      const userData = data as UserData
      console.log(userData)
      if( userData.message == "Success" ){

        this.userDataService.storeUserData(userData)
        this.toaster.success(" Success " , " Register Success ")
        this.navigation.navigateTo("/home")

      }else{

        this.toaster.error(" Error " , userData.message )

      }

    },error =>{

      this.toaster.error(error.error.text)

      // this.isLoggingIn = false
      // this.spinner.hide()

    })

  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    console.log(event.target.files[0] as File)
  }

  backPage(){
    this.page--
  }
  suivant(){
    if(this.page == 3){
      this.register()
    }
    else{
      if (this.validateCurrentStep()) {
        // Passer à l'étape suivante
        this.page++;
      }else{
        this.toaster.error(" Info inccorecte " , " Vérifié les informations ")
      }
    }
  }

  validateCurrentStep(): boolean {
    switch (this.page) {
      case 1:

        let verif = false;

        console.log("ttttttttttttttttttttt",this.registerForm.get('password')?.value === this.registerForm.get('comPassword')?.value)
        console.log("ttttttttttttttttttttt",this.registerForm.get('comPassword')?.value)
        console.log("ttttttttttttttttttttt",this.registerForm.get('password')?.value)

        if(!!this.registerForm.get('password')?.valid && !!this.registerForm.get('comPassword')?.valid && this.registerForm.get('password')?.value==this.registerForm.get('comPassword')?.value ){
          verif = true
        }

        return !!this.registerForm.get('email')?.valid && verif;

      case 2:
        // Ajoutez ici les validations pour l'étape 2

        let ver = false;
        if(this.selectedFile !=null){
          ver=true
        }
        return ver && !!this.registerForm.get('prenom')?.valid && !!this.registerForm.get('nom')?.valid && !!this.registerForm.get('ville')?.valid && !!this.registerForm.get('rue')?.valid && !!this.registerForm.get('numero')?.valid && !!this.registerForm.get('telephone')?.valid ;
      // Ajoutez d'autres cas pour les étapes suivantes
      default:
        return false;
    }
  }

  getImageUrl(): SafeUrl | null {
    if (this.selectedFile) {
      const url = URL.createObjectURL(this.selectedFile);
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }
    return null;
  }

}
