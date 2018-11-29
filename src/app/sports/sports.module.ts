import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { WNBAComponent } from './wnba/wnba.component';
import { NBAComponent } from './nba/nba.component';
import { NFLComponent } from './nfl/nfl.component';
import { MLBComponent } from './mlb/mlb.component';
import { SoccerComponent } from './soccer/soccer.component';
import { ESportsComponent } from './e-sports/e-sports.component';
import {sportsRoutes} from './sports-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatDialogModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SportsComponent,
    WNBAComponent,
    NBAComponent,
    NFLComponent,
    MLBComponent,
    SoccerComponent,
    ESportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(sportsRoutes),
    MatChipsModule,
    MatButtonModule
  ]
})
export class SportsModule { }
