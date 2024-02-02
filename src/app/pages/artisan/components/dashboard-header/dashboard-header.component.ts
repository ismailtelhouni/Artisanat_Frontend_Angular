import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/utils/navigation';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {


  constructor(
    private navigation:NavigationService,
  ){}

  toAddProduct(){
    this.navigation.navigateTo("artisan/addProduct")
  }

}
