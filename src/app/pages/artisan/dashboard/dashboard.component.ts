import { StoreData } from './../../../models/store.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataService } from 'src/app/services/auth/user-data.service';
import { NavigationService } from 'src/app/services/utils/navigation';
import { StoresService } from 'src/app/services/apis/stores.service';
import { User, UserData } from 'src/app/models/auth.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvatarDialogComponent } from '../../auth/components/avatar-dialog/avatar-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  stores :StoreData[] = [];

  user! : UserData;

  addstore:boolean=false;

  registerForm!:FormGroup;

  validation_messages = {
    'nom': { type: 'required', message: 'nom is required.' }
  }
  item: any = {
    'avatar':'../../../../assets/img/avatar1.jpg'
  };

  formeInValid :boolean=false;

  constructor(
    private userData : UserDataService,
    private navigation : NavigationService,
    private storeService:StoresService,
    private fb : FormBuilder ,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private toaster:ToastrService,
  ){
    const userD = this.userData.getUserData();
    if(userD){
      this.user = userD;
    }
  }
  ngOnInit(): void {
    this.createForm();
    console.log("cheeeeeeeeeeeeeeeeeeck")
    if( !this.userData.authCheck() || this.userData.getUserData() == null ){
      console.log("teeeeeeeeeeeeeeeeeeeeeeest")
      this.navigation.navigateTo('/home');
    }else{
      if(this.userData.getUserData()?.role == "ROLE_CLIENT"){
        console.log("teeeeeeeeeeeeeeeeeeeeeeest")
        this.navigation.navigateTo('/home');
      }else{
        this.loadData();
      }
    }
    console.log("rooooooooole : ",this.userData.getUserData()?.role == "ROLE_CLIENT")
  }
  loadData(){
    this.storeService.getStoreByArtisan().subscribe(
      (data : any[]) => {
        for (const item of data) {
          // Accéder à la propriété 'name' de chaque objet
          const storeData = item as StoreData
          storeData.avatar = "assets/img/"+storeData.avatar
          this.stores.push(storeData)
        }
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    )
  }
  openExpansionPanel(){
    console.log("addStore : user -- > ", this.user);
    this.addstore = true
  }
  createForm(){
    this.registerForm = this.fb.group({
      nom : [ '' , [ Validators.required ] ],
      adresse : [ '' , [ Validators.required ] ],
    })
  }
  closeExpansionPanel(){
    this.addstore = false
  }
  addStore(){
    if(this.registerForm.get('nom')?.valid){
      console.log(this.registerForm.value)
      // Trouver la dernière occurrence de '/'
      const lastIndex = this.item.avatar.lastIndexOf('/');
      // Extraire le nom du fichier après la dernière occurrence de '/'
      const avatarName = this.item.avatar.substring(lastIndex + 1);
      var user_data :User = {
        userId      :this.user.userId,
        nom         : '',
        prenom      : '',
        ville       : '',
        numero      : '',
        rue         : '',
        telephone   : '',
        email       : '',
        token       : '',
      }
      const storeData :StoreData = {
        storeId     : 0,
        adress      : this.registerForm.value.adresse,
        artisant    : user_data,
        avatar      : avatarName,
        nom         : this.registerForm.value.nom,
        qteProduit  : 0,
      }
      console.log("stttttttttttttttttttttore : ",storeData)
      this.storeService.saveStore(storeData).subscribe(
        (data : any) => {
          console.log(data)
          const store = data as StoreData;
          if( store.storeId != null ){
            this.navigation.navigateTo('/artisan/dashboard')
            this.cdr.detectChanges();
            this.closeExpansionPanel();
            store.avatar = "assets/img/"+store.avatar
            this.stores.push(store)
          }
        },
        (error:any) => {
          console.error('Error fetching data:', error);
        }
      )
    }else{
      this.formeInValid = true;
      this.toaster.error(" Info inccorecte " , this.validation_messages.nom.message )
    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.item.avatar = result.link;
      }
    });
  }

}
