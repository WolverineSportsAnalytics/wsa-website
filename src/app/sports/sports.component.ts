import { Component, OnInit } from '@angular/core';
import {SportMenuInterface} from '../shared/models/sport-directory';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  public sports: SportMenuInterface[];

  constructor(private router: Router) {
    this.sports = [
      {sport: 'NBA', icon: 'explore', routerLink: 'nba'},
      {sport: 'WNBA', icon: 'explore', routerLink: 'wnba'},
      {sport: 'NFL', icon: 'explore', routerLink: 'nfl'},
      {sport: 'MLB', icon: 'explore', routerLink: 'mlb'},
      {sport: 'Soccer', icon: 'explore', routerLink: 'soccer'},
      {sport: 'E-Sports', icon: 'explore', routerLink: 'e-sports'}
    ];
  }

  ngOnInit() {
  }

  sportClick(sport: SportMenuInterface) {
    this.router.navigate(['/home/sports/' + sport.routerLink]);
  }

}
