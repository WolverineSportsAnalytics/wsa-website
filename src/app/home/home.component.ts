import { Component, OnInit } from '@angular/core';
import {SportMenuInterface} from '../shared/models/sport-directory';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';
import {User} from '../shared/models/user';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sports: SportMenuInterface[];
  public loggedIn: boolean;
  public currentUser: User;

  constructor(private router: Router, public dialog: MatDialog, private auth: AuthService) {
    this.sports = [
      {sport: 'NBA', icon: 'explore', routerLink: '/NBA'},
      {sport: 'WNBA', icon: 'explore', routerLink: '/WNBA'},
      {sport: 'NFL', icon: 'explore', routerLink: '/NFL'},
      {sport: 'MLB', icon: 'explore', routerLink: '/MLB'},
      {sport: 'Soccer', icon: 'explore', routerLink: '/Soccer'},
      {sport: 'E-Sports', icon: 'explore', routerLink: '/E-Sports'}
    ];

    this.loggedIn = this.isAuthenticated();
  }


  ngOnInit() {
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data) {
        if (this.isAuthenticated()) {
          this.currentUser = this.getUser();
        }
      }
    });
  }

  isAuthenticated(): boolean {
    this.loggedIn = this.auth.isAuthenticated();
    return this.loggedIn;
  }

  getUser(): User {
    console.log(this.auth.getUser());
    return this.auth.getUser();
  }

  sportClick(sport) {
    this.router.navigate([sport.toLocaleLowerCase()]);
  }

}
