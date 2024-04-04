import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup;
  errorMessage: any;
  constructor(private authService: AuthService, private cookieService : CookieService, private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      email: ["",Validators.required],
      password: ["",Validators.required],

    })
  }
  login() {
    if(this.loginForm.invalid){
      return;
    }
    const loginPalyload = this.loginForm.value;
    this.authService.login(loginPalyload)
      .subscribe(
        (resource) => {
          console.log(resource.access_token);
          this.cookieService.delete('accessToken')
          this.cookieService.set('accessToken',resource?.access_token);
         this.router.navigateByUrl('/search');
         this.cookieService.set('loggedIn','true');

        },
        error => {
          this.errorMessage = error;
          console.error('login error:', error);
        }
      );
  }
}

