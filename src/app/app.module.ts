import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './auth/auth.guard';
import { LoaderService } from './services/loader.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuardService,LoaderService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
