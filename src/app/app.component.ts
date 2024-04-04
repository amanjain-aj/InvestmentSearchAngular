import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'investment-search';

  constructor(private authService: AuthService){}
  isUserLogin(){
    return this.authService.isLoggedIn();
  }
 

}


