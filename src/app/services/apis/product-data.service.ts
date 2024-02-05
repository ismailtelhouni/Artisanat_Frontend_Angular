import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendConfigService } from './backend-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(
    private http: HttpClient,
    private backendConfigService: BackendConfigService
    ) {}

    getAllProducts(): Observable<any> {
      
    const backendHost = this.backendConfigService.getProductsHost();
    const apiUrl = `${backendHost}/api/produits`;

    console.log ("products: ", this.http.get<any>(`${apiUrl}`));
    return this.http.get<any>(`${apiUrl}`);
  }

  getProductById(productId:string): Observable<any> {
      
    const backendHost = this.backendConfigService.getProductsHost();
    const apiUrl = `${backendHost}/api/produits/id/${productId}`;

    console.log ("products: ", this.http.get(apiUrl));
    return this.http.get(apiUrl);
  }
}
