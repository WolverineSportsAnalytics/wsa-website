import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ESportsComponent} from './e-sports/e-sports.component';
import {WNBAComponent} from './wnba/wnba.component';
import {NBAComponent} from './nba/nba.component';
import {SoccerComponent} from './soccer/soccer.component';
import {NFLComponent} from './nfl/nfl.component';
import {MLBComponent} from './mlb/mlb.component';
import {SportsComponent} from './sports.component';
import {LoginGuardService} from '../shared/services/login-guard.service';

export const sportsRoutes: Routes = [
  { path: '', component: SportsComponent, canActivate: [LoginGuardService]},
  { path: 'wnba', component: WNBAComponent, canActivate: [LoginGuardService]},
  { path: 'e-sports', component: ESportsComponent, canActivate: [LoginGuardService]},
  { path: 'nba', component: NBAComponent, canActivate: [LoginGuardService]},
  { path: 'soccer', component: SoccerComponent, canActivate: [LoginGuardService]},
  { path: 'nfl', component: NFLComponent, canActivate: [LoginGuardService]},
  { path: 'mlb', component: MLBComponent, canActivate: [LoginGuardService]}
];


