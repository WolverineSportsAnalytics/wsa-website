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
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LineupComponent} from '../lineup/lineup.component';
import {LineupsService} from '../lineup/lineups.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {environment} from '../../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../shared/services/in-memory-data.service';

@NgModule({
  declarations: [
    SportsComponent,
    WNBAComponent,
    NBAComponent,
    NFLComponent,
    MLBComponent,
    SoccerComponent,
    ESportsComponent,
    LineupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(sportsRoutes),
    MatChipsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    LineupsService
  ]
})
export class SportsModule { }
