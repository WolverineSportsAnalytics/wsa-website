import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldControl,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatOptionModule, MatSelectModule, MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './login/auth.service';
import {CommonDataService} from './shared/services/common-data.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LineupComponent } from './lineup/lineup.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FlexLayoutModule
  ],
  providers: [
    AuthService,
    CommonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
