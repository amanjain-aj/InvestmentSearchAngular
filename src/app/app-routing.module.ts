import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { InvestementSearchComponent } from './modules/investement-search/investement-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'search', component: InvestementSearchComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/investement-search/investement-search.module').then(
        (m) => m.InvestementSearchModule
      ),
  },{
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/investement-dashboard/investement-dashboard.module').then(
        (m) => m.InvestementDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
