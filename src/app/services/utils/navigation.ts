import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  navigateToParam(route: string,data: any): void {
    this.router.navigate([route], { state: { customData: data } });
  }

}
