import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {CommonDataService} from './common-data.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpHeaders = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  private currentUser: User;

  constructor(private http: HttpClient, private wsaCommonService: CommonDataService) { }

  loginUser(userName: string, password: string) {
    // set current user to logged in user
    const loginInfo = { username: userName, password: password };

    console.log(loginInfo);

    this.currentUser = {
      firstName: 'WSA',
      lastName: 'WSA',
      username: 'WSA'
    };

    return new Observable(observer => {
      observer.next(true);
      observer.complete();

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return {unsubscribe() {}};
    });
  }

  isAuthenticated() {
    console.log(!!this.currentUser);
    return (!(!this.currentUser));
  }

  getUser() {
    return this.currentUser;
  }
}
