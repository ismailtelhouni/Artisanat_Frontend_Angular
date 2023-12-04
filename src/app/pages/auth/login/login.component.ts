import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  image:String = "assets/img/login.jpg";
  routePath:String = "/register"
  constructor(private router: Router) {}
  navigateTo( route: string ): void {
    this.router.navigate([ route ]);
  }

}
