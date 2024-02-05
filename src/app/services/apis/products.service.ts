import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendConfigService } from './backend-config.service';
import { UserDataService } from '../auth/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  backendHost = this.backendConfigService.getBackendHost();

  constructor(
    private http: HttpClient,
    private backendConfigService: BackendConfigService,
    private userData:UserDataService
  ) {}

  getProductsByArtisan(pageSize:number , page:number):any{

    const apiUrl = `${this.backendHost}/api/produits/artisan/pageSize/${pageSize}/page/${page}`;

    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);
  }

  setProduct(form:FormData):any{

    console.log("tesssssssssssssssssst")

    const apiUrl = `${this.backendHost}/api/produits/artisan`;

    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };

    return this.http.post( apiUrl , form , options );
  }

  getQteProducts():any{

    console.log("tessssssssssssssssst getQteProductsgetQteProductsgetQteProductsgetQteProducts ")

    const apiUrl = `${this.backendHost}/api/produits/countby/artisan`;


    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);

  }

  getNombreStores():any{

    console.log("tessssssssssssssssst getQteProductsgetQteProductsgetQteProductsgetQteProducts ")

    const apiUrl = `${this.backendHost}/api/stores/countby/artisan`;


    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);

  }

  getNbreProduitAchatByArtisan():any{

    const apiUrl = `${this.backendHost}/api/commandes/produitByDate`;


    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);

  }

  getCommandeByArtisan():any{

    const apiUrl = `${this.backendHost}/api/commandes/ByArtisan`;


    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);

  }


}
