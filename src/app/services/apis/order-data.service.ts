// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BackendConfigService } from './backend-config.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(
    private http: HttpClient,
    private backendConfigService: BackendConfigService
    
    ) { }

    backendHost:String = this.backendConfigService.getUsersHost();
    apiUrl = `${this.backendHost}/api`;

  placeOrder(orderPayload: any): Observable<any> {
    const endpoint = `${this.apiUrl}/commandes`;
    return this.http.post(endpoint, orderPayload)
      .pipe(
        catchError((error) => {
          // Handle errors here
          console.error('Error placing order:', error);
          throw error;
        })
      );
  }
}
