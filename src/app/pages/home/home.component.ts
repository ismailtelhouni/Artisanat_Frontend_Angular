import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeImage :String = "../../../assets/img/5268821.jpg"


constructor(private router: Router) {}

navigateTo( route: string ): void {
  this.router.navigate([ route ]);
}

}
