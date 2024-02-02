import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendConfigService } from './backend-config.service';
import { AuthService } from '../auth/auth.service';
import { UserData } from 'src/app/models/auth.model';
import { UserDataService } from '../auth/user-data.service';
import { StoreData } from 'src/app/models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  backendHost = this.backendConfigService.getBackendHost();

  constructor(
    private http: HttpClient,
    private backendConfigService: BackendConfigService,
    private userData:UserDataService
  ) {}

  getStoreByArtisan():any{

    const apiUrl = `${this.backendHost}/api/stores/artisan`;

    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);

  }

  saveStore(store:StoreData):any{
    const apiUrl = `${this.backendHost}/api/stores`;

    const token = this.userData.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.post(apiUrl,store,options)
  }

}
