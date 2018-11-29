import { Routes} from '@angular/router';
import {FrontPageComponent} from './front-page/front-page.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './shared/services/login-guard.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: FrontPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home/sports', loadChildren: './sports/sports.module#SportsModule', canActivate: [LoginGuardService]}
];
