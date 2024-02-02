import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackendConfigService } from '../apis/backend-config.service';
import { Login } from 'src/app/models/auth.model';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(

    private http:HttpClient,
    private backendConfigService: BackendConfigService,
    private userData:UserDataService

  ) { }

  login(model:Login){

    const backendHost = this.backendConfigService.getBackendHost();
    const apiUrl = `${backendHost}/api/login`;
    this.isAuthenticatedSubject.next(true);
    return this.http.post( apiUrl , model , { withCredentials: true } )

  }

  isUserAuthenticated():boolean{
    const userDataString = localStorage.getItem('userData');
    return !!userDataString;
  }

  logout() {

    const token = this.userData.getUserData()?.token ;
    const options = {
      withCredentials: true, // Indique à Angular d'inclure les cookies
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      })
    };

    localStorage.removeItem('userData');

    const backendHost = this.backendConfigService.getBackendHost();
    const apiUrl = `${backendHost}/api/logout`;
    this.isAuthenticatedSubject.next(false);
    return this.http.get( apiUrl , options )

  }

  register(data:FormData){

    const backendHost = this.backendConfigService.getBackendHost();
    const apiUrl = `${backendHost}/api/register`;
    this.isAuthenticatedSubject.next(true);
    return this.http.post( apiUrl , data )

  }

  registerArtisan( data:FormData ){

    const backendHost = this.backendConfigService.getBackendHost();
    const apiUrl = `${backendHost}/api/register/artisan`;
    this.isAuthenticatedSubject.next(true);
    return this.http.post( apiUrl , data )

  }
}
