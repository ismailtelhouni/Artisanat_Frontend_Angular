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

  getProductsByArtisan():any{
    const apiUrl = `${this.backendHost}/api/produits/artisan`;

    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);
  }

  setProduct(form:FormData):any{

    const apiUrl = `${this.backendHost}/api/produits/artisan`;

    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };

    return this.http.post( apiUrl , form , options );
  }

}
