import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendConfigService {
    private backendHost: string = environment.backendHost;
    private productsHost: string = environment.productsHost;
    
    getBackendHost(): string {
      return this.backendHost;
    }

    getProductsHost(): string {
      return this.productsHost;
    }
}