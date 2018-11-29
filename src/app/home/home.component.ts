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
  public loggedIn: boolean;
  public currentUser: User;

  constructor(private router: Router, public dialog: MatDialog, private auth: AuthService) {
    this.loggedIn = this.isAuthenticated();
  }


  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['']);
  }

  goToSports() {
    this.router.navigate(['/home/sports']);
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

}
