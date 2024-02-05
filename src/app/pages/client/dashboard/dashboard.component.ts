import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { UserDataService } from 'src/app/services/auth/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor(
    private userServiceData:UserDataService
  ){}
  currentClient:Client = {
    id: 1,
    nom: 'testNom',
    prenom: 'prenomTest',
    profile: 'imagedsd',
    commandes:[{
        commandeId: 1,
        ligneCommandes:[{
            id:1,
            produit:{
              description:'',
              id:'1',
              prix:170,
              nom:'',
              categories:[{
                id: 1,
                nom: 'string',
                description:""
              }],
              images:[{
                id: 1,
                path: ''
              }]
            },
            quantite:1
        }]
      }]
  };


  ngOnInit(): void {
    this.currentClient.id = this.userServiceData.getUserData()?.userId;
    this.getUser();
  }

  getUser(): void {
    this.userServiceData
      .getUserById(this.currentClient.id)
      .subscribe((_user) => {
        this.currentClient = _user;
        console.log("results:",_user);
      });
  }



  getImageSrc(image: string | undefined): string {
    // Check if the image is defined before accessing its properties
    return image ? `http://localhost:8080/Pf_Artis/${image}` : '';
  }


}
