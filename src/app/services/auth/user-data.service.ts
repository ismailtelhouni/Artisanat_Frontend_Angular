import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from 'src/app/models/auth.model';
import { BackendConfigService } from '../apis/backend-config.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  backendHost = this.backendConfigService.getBackendHost();
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private backendConfigService: BackendConfigService,
  ) { }

  async storeUserData(userData : UserData){
    const userDataString = JSON.stringify(userData);
    await localStorage.setItem( "userData" , userDataString )
  }

  getUserData() : UserData | null{
    const storedUserDataString = localStorage.getItem('userData');
    if (storedUserDataString) {
      const userData: UserData = JSON.parse(storedUserDataString);
      console.log('Données utilisateur récupérées :', userData);
      return userData
    } else {
      console.log('Aucune donnée utilisateur stockée.');
      return null
    }
  }

  async authCheck():Promise<boolean>{
    const storedUserDataString = localStorage.getItem('userData');
    if(storedUserDataString){
      try {
        const data: any = await this.authUser().toPromise();
        console.log("daaaaaaaaaaaaaaaaaaaaaata : ",data);
        const userData = data as UserData;
        if (userData.message === "Success") {
          return true;
        } else {
          localStorage.removeItem('userData');
          this.isAuthenticatedSubject.next(false);
          console.log("2- tesssssssssssssssssssssssssssssssssssssssssssssst")
          return false;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      return false;
      }
    }else{
      return false
    }
  }

  authUser():Observable<any>{

    const apiUrl = `${this.backendHost}/api/authUser`;

    const token = this.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);

  }

  getUserCurrent(){

    const apiUrl = `${this.backendHost}/api/users/userData`;


    const token = this.getUserData()?.token ;

    const options = {
      headers: {
          'Authorization': 'Bearer ' + token,  // Adjust based on your token mechanism
          },
      };
    return this.http.get(apiUrl,options);

  }

}
